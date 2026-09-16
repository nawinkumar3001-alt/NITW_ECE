import React, { useEffect, useRef } from 'react';

export const HeroCanvas: React.FC = () => {
  const glRef = useRef<HTMLCanvasElement | null>(null);
  const sparkRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // 1. WebGL Raymarching Background: 3D Dravidian/Kakatiya temple tower + orbiting 3D Tara star + volumetric atmosphere
    const glCanvas = glRef.current;
    if (!glCanvas) return;

    const gl =
      glCanvas.getContext('webgl', { antialias: false, alpha: true, depth: false }) ||
      (glCanvas.getContext('experimental-webgl', { antialias: false, alpha: true }) as WebGLRenderingContext | null);

    let animationFrameId: number;
    let isRunning = true;

    if (gl) {
      const VERT = `
        attribute vec2 p;
        void main() { gl_Position = vec4(p, 0.0, 1.0); }
      `;

      const FRAG = `
        precision highp float;
        uniform vec2  uRes;
        uniform float uTime;
        uniform vec2  uMouse;

        #define TAU 6.28318530718
        #define MAXSTEP 72
        #define MAXDIST 50.0
        #define EPS 0.002

        mat2 rot(float a) { float c=cos(a), s=sin(a); return mat2(c,-s,s,c); }
        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }

        float sdBox(vec3 p, vec3 b) {
          vec3 q = abs(p) - b;
          return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
        }

        // 10-point Kakatiya Tara star
        float sdStar(vec3 p, float R, float r, float h) {
          float a = atan(p.z, p.x);
          float seg = TAU / 10.0;
          float aa = mod(a, seg) - seg * 0.5;
          float rad = length(p.xz);
          float t = abs(aa) / (seg * 0.5);
          float edge = mix(R, r, t);
          float d2 = rad - edge;
          float dz = abs(p.y) - h;
          return length(max(vec2(d2, dz), 0.0)) + min(max(d2, dz), 0.0);
        }

        float sdGopuram(vec3 p) {
          float d = 1e9;
          for(int i=0; i<6; i++) {
            float fi = float(i);
            float y = fi * 0.68;
            float s = 1.65 - fi * 0.22;
            vec3 q = p - vec3(0.0, y, 0.0);
            q.xz = rot(fi * 0.05) * q.xz;
            float tier = sdBox(q, vec3(s, 0.28, s));
            d = min(d, tier);
            float lip = sdBox(q - vec3(0.0, 0.32, 0.0), vec3(s * 1.1, 0.06, s * 1.1));
            d = min(d, lip);
          }
          // Finial pinnacle
          d = min(d, sdBox(p - vec3(0.0, 4.5, 0.0), vec3(0.18, 0.38, 0.18)));
          // Plinth
          d = min(d, sdBox(p - vec3(0.0, -0.45, 0.0), vec3(2.1, 0.22, 2.1)));
          return d;
        }

        vec2 map(vec3 p) {
          vec2 res = vec2(sdGopuram(p), 1.0);
          float ta = uTime * 0.38;
          vec3 sp = p - vec3(cos(ta)*3.6, 2.7 + sin(uTime*0.7)*0.35, sin(ta)*3.6);
          sp.xz = rot(uTime * 0.8) * sp.xz;
          sp.xy = rot(uTime * 0.4) * sp.xy;
          float star = sdStar(sp, 0.65, 0.28, 0.08);
          if (star < res.x) res = vec2(star, 2.0);
          return res;
        }

        vec3 calcNormal(vec3 p) {
          vec2 e = vec2(EPS, 0.0);
          return normalize(vec3(
            map(p+e.xyy).x - map(p-e.xyy).x,
            map(p+e.yxy).x - map(p-e.yxy).x,
            map(p+e.yyx).x - map(p-e.yyx).x
          ));
        }

        void main() {
          vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
          float ca = uTime * 0.08 + uMouse.x * 0.45;
          float radius = 8.5 + sin(uTime * 0.2) * 0.5;
          float camY = 3.2 - uMouse.y * 0.8;
          vec3 ro = vec3(cos(ca)*radius, camY, sin(ca)*radius);
          vec3 ta = vec3(0.0, 1.8, 0.0);
          vec3 fw = normalize(ta - ro);
          vec3 rt = normalize(cross(vec3(0.0, 1.0, 0.0), fw));
          vec3 up = cross(fw, rt);
          vec3 rd = normalize(uv.x * rt + uv.y * up + 1.5 * fw);

          float t = 0.0;
          float mat = 0.0;
          bool hit = false;
          for(int i=0; i<MAXSTEP; i++) {
            vec3 p = ro + rd * t;
            vec2 h = map(p);
            if (h.x < EPS * t) { hit = true; mat = h.y; break; }
            t += h.x * 0.88;
            if (t > MAXDIST) break;
          }

          vec3 col = vec3(0.035, 0.02, 0.01);
          float sunD = max(dot(rd, normalize(vec3(-0.55, 0.22, -0.8))), 0.0);
          col += vec3(0.9, 0.42, 0.1) * pow(sunD, 6.0) * 0.5;

          if (hit) {
            vec3 p = ro + rd * t;
            vec3 n = calcNormal(p);
            vec3 L = normalize(vec3(-0.5, 0.7, -0.5));
            float dif = clamp(dot(n, L), 0.0, 1.0);
            float fres = pow(1.0 - clamp(dot(n, -rd), 0.0, 1.0), 3.0);
            
            vec3 albedo = vec3(0.35, 0.20, 0.10);
            if (mat > 1.5) {
              albedo = vec3(1.0, 0.68, 0.18); // Gold star
            }

            vec3 lit = albedo * (0.15 + 0.85 * dif);
            lit += vec3(1.0, 0.55, 0.15) * fres * 0.4;
            if (mat > 1.5) {
              lit += vec3(1.0, 0.75, 0.25) * 0.9;
            }
            col = mix(lit, col, 1.0 - exp(-0.007 * t * t));
          }

          // Volumetric warm godrays
          float scat = 0.0;
          vec3 sd = normalize(vec3(-0.55, 0.22, -0.8));
          for(int i=0; i<10; i++) {
            float ft = float(i) / 10.0;
            vec3 sp = ro + rd * (ft * min(t, 22.0));
            float shaft = max(dot(normalize(sp - ro), sd), 0.0);
            scat += pow(shaft, 8.0) * 0.035;
          }
          col += vec3(1.0, 0.5, 0.12) * scat;

          // Tonemap & warm vignette
          col = col / (col + vec3(0.85));
          float vig = 1.0 - 0.5 * dot(uv, uv);
          col *= clamp(vig, 0.0, 1.0);

          float alpha = clamp(max(col.r, max(col.g, col.b)) * 3.0, 0.0, 0.95);
          gl_FragColor = vec4(col, alpha);
        }
      `;

      const createShader = (type: number, src: string) => {
        const s = gl.createShader(type);
        if (!s) return null;
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
      };

      const vs = createShader(gl.VERTEX_SHADER, VERT);
      const fs = createShader(gl.FRAGMENT_SHADER, FRAG);
      if (vs && fs) {
        const prog = gl.createProgram();
        if (prog) {
          gl.attachShader(prog, vs);
          gl.attachShader(prog, fs);
          gl.linkProgram(prog);
          gl.useProgram(prog);

          const buf = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, buf);
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
          const loc = gl.getAttribLocation(prog, 'p');
          gl.enableVertexAttribArray(loc);
          gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

          const uRes = gl.getUniformLocation(prog, 'uRes');
          const uTime = gl.getUniformLocation(prog, 'uTime');
          const uMouse = gl.getUniformLocation(prog, 'uMouse');

          let mx = 0, my = 0, tmx = 0, tmy = 0;
          const handleMove = (e: PointerEvent) => {
            tmx = (e.clientX / window.innerWidth - 0.5) * 2;
            tmy = (e.clientY / window.innerHeight - 0.5) * 2;
          };
          window.addEventListener('pointermove', handleMove, { passive: true });

          const t0 = performance.now();
          const renderGL = () => {
            if (!isRunning) return;
            const w = Math.floor(glCanvas.offsetWidth * 0.65);
            const h = Math.floor(glCanvas.offsetHeight * 0.65);
            if (glCanvas.width !== w || glCanvas.height !== h) {
              glCanvas.width = w;
              glCanvas.height = h;
              gl.viewport(0, 0, w, h);
            }
            mx += (tmx - mx) * 0.05;
            my += (tmy - my) * 0.05;
            gl.uniform2f(uRes, glCanvas.width, glCanvas.height);
            gl.uniform1f(uTime, (performance.now() - t0) / 1000);
            gl.uniform2f(uMouse, mx, my);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
            animationFrameId = requestAnimationFrame(renderGL);
          };
          renderGL();
        }
      }
    }

    // 2. Interactive Spark & Constellation 2D Layer
    const sparkCanvas = sparkRef.current;
    if (sparkCanvas) {
      const ctx = sparkCanvas.getContext('2d');
      if (ctx) {
        let W = (sparkCanvas.width = sparkCanvas.offsetWidth);
        let H = (sparkCanvas.height = sparkCanvas.offsetHeight);
        const onResize = () => {
          if (!sparkCanvas) return;
          W = sparkCanvas.width = sparkCanvas.offsetWidth;
          H = sparkCanvas.height = sparkCanvas.offsetHeight;
        };
        window.addEventListener('resize', onResize);

        const particles: Array<{
          x: number;
          y: number;
          vx: number;
          vy: number;
          size: number;
          alpha: number;
          hue: number;
        }> = [];

        for (let i = 0; i < 75; i++) {
          particles.push({
            x: Math.random() * W,
            y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.6,
            vy: -Math.random() * 0.8 - 0.2,
            size: Math.random() * 2 + 0.8,
            alpha: Math.random() * 0.7 + 0.2,
            hue: 25 + Math.random() * 25,
          });
        }

        let mouseX = W / 2;
        let mouseY = H / 2;
        const onCanvasMove = (e: MouseEvent) => {
          const rect = sparkCanvas.getBoundingClientRect();
          mouseX = e.clientX - rect.left;
          mouseY = e.clientY - rect.top;
        };
        sparkCanvas.addEventListener('mousemove', onCanvasMove);

        const renderSparks = () => {
          if (!isRunning) return;
          ctx.clearRect(0, 0, W, H);

          // Subtle interactive halo around cursor
          const glow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 180);
          glow.addColorStop(0, 'rgba(232, 160, 32, 0.12)');
          glow.addColorStop(1, 'rgba(10, 6, 0, 0)');
          ctx.fillStyle = glow;
          ctx.fillRect(0, 0, W, H);

          ctx.save();
          ctx.globalCompositeOperation = 'lighter';
          particles.forEach((p) => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.y < -10) {
              p.y = H + 10;
              p.x = Math.random() * W;
            }
            if (p.x < 0) p.x = W;
            if (p.x > W) p.x = 0;

            // Distance to mouse gives gentle interaction
            const dx = p.x - mouseX;
            const dy = p.y - mouseY;
            const dist = Math.hypot(dx, dy);
            if (dist < 100) {
              p.x += (dx / dist) * 1.2;
              p.y += (dy / dist) * 1.2;
            }

            ctx.shadowBlur = p.size * 3;
            ctx.shadowColor = `hsl(${p.hue}, 100%, 65%)`;
            ctx.fillStyle = `hsla(${p.hue}, 100%, 75%, ${p.alpha})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
          });
          ctx.restore();

          requestAnimationFrame(renderSparks);
        };
        renderSparks();
      }
    }

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* 3D Raymarching canvas */}
      <canvas
        ref={glRef}
        className="absolute inset-0 w-full h-full opacity-85 object-cover"
        style={{ filter: 'contrast(1.15) brightness(1.05)' }}
      />
      {/* Particle & Constellation 2D overlay */}
      <canvas
        ref={sparkRef}
        className="absolute inset-0 w-full h-full pointer-events-auto cursor-crosshair opacity-90"
      />
      {/* Vignette and soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0600]/40 via-transparent to-[#0a0600]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,transparent_35%,rgba(10,6,0,0.85)_100%)]" />
    </div>
  );
};
