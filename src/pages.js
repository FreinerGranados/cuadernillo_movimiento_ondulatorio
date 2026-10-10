import Plotly from 'plotly.js-dist-min';
import * as THREE from 'three';

export const pages = [
    {
        // 1. Portada - Vacía como solicitó el usuario, solo la imagen de fondo de CSS actuará
        content: ``,
    },
    {
        // 2. Índice
        content: `
            <h1 class="page-title">Índice de Contenidos</h1>
            <div style="column-count: 2; column-gap: 40px; font-size: 1.1rem; line-height: 1.8;">
                <ul style="list-style: none; padding: 0;">
                    <li><a href="#" onclick="window.goToPage(3); return false;">Mapa Mental</a></li>
                    <li><a href="#" onclick="window.goToPage(4); return false;">Línea de Tiempo y Reseña Histórica</a></li>
                    <li><a href="#" onclick="window.goToPage(5); return false;">Tema 1: Concepto de movimiento ondulatorio</a></li>
                    <li><a href="#" onclick="window.goToPage(6); return false;">Tema 2 y 3: Clasificación y Elementos</a></li>
                    <li><a href="#" onclick="window.goToPage(7); return false;">Tema 4 y 5: Frecuencia y Velocidad</a></li>
                    <li><a href="#" onclick="window.goToPage(8); return false;">Tema 6 y 7: Ecuación y Función de onda</a></li>
                    <li><a href="#" onclick="window.goToPage(9); return false;">Tema 8 y 9: Velocidad transv. y Potencia</a></li>
                    <li><a href="#" onclick="window.goToPage(10); return false;">Tema 10 y 11: Superposición y Estacionarias</a></li>
                    <li><a href="#" onclick="window.goToPage(11); return false;">Tema 12: Fenómenos Ondulatorios</a></li>
                    <li><a href="#" onclick="window.goToPage(12); return false;">Tema 13 y 14: Sonido y Electromagnetismo</a></li>
                    <li><a href="#" onclick="window.goToPage(13); return false;">Tema 15, 16 y 17: Aplicaciones y Resumen</a></li>
                    <li><a href="#" onclick="window.goToPage(14); return false;">Ejercicios Resueltos y Propuestos</a></li>
                    <li><a href="#" onclick="window.goToPage(15); return false;">Simulación A y B: Onda Viajera y Comparador</a></li>
                    <li><a href="#" onclick="window.goToPage(16); return false;">Simulación C y D: Superposición y Estacionarias</a></li>
                    <li><a href="#" onclick="window.goToPage(17); return false;">Simulación E y F: Fenómenos y Sonido</a></li>
                    <li><a href="#" onclick="window.goToPage(18); return false;">Simulación 3D: Onda Tridimensional</a></li>
                    <li><a href="#" onclick="window.goToPage(19); return false;">Glosario y Referencias</a></li>
                </ul>
            </div>
        `,
        onLoad: () => {
            window.goToPage = (num) => {
                const event = new CustomEvent('gotoPage', { detail: num });
                document.dispatchEvent(event);
            };
        }
    },
    {
        // 3. Mapa mental
        content: `
            <h1 class="page-title">Mapa Mental</h1>
            <div class="interactive-widget" id="mapa-mental-container" style="height: 600px; position: relative; overflow: hidden; border-radius: 12px; background: white;">
                <svg width="100%" height="100%" viewBox="0 0 800 600">
                    <defs>
                        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#3949ab" />
                        </marker>
                    </defs>
                    <g id="mapa-zoom">
                        <line x1="400" y1="300" x2="200" y2="150" stroke="#3949ab" stroke-width="2" marker-end="url(#arrow)"/>
                        <line x1="400" y1="300" x2="600" y2="150" stroke="#3949ab" stroke-width="2" marker-end="url(#arrow)"/>
                        <line x1="400" y1="300" x2="200" y2="450" stroke="#3949ab" stroke-width="2" marker-end="url(#arrow)"/>
                        <line x1="400" y1="300" x2="600" y2="450" stroke="#3949ab" stroke-width="2" marker-end="url(#arrow)"/>
                        <line x1="400" y1="300" x2="400" y2="100" stroke="#3949ab" stroke-width="2" marker-end="url(#arrow)"/>
                        
                        <g transform="translate(400, 300)">
                            <circle cx="0" cy="0" r="50" fill="#fce4ec" stroke="#3949ab" stroke-width="3" />
                            <text x="0" y="5" font-family="Inter" font-size="14" text-anchor="middle" font-weight="bold" fill="#1a237e">Ondas</text>
                        </g>
                        <g transform="translate(400, 100)">
                            <rect x="-60" y="-30" width="120" height="60" rx="10" fill="#e1f5fe" stroke="#3949ab" stroke-width="2" />
                            <text x="0" y="5" font-family="Inter" font-size="12" text-anchor="middle" fill="#1a237e">Concepto Fundamental</text>
                        </g>
                        <g transform="translate(200, 150)">
                            <rect x="-60" y="-30" width="120" height="60" rx="10" fill="#e1f5fe" stroke="#3949ab" stroke-width="2" />
                            <text x="0" y="5" font-family="Inter" font-size="12" text-anchor="middle" fill="#1a237e">Clasificación</text>
                        </g>
                        <g transform="translate(600, 150)">
                            <rect x="-60" y="-30" width="120" height="60" rx="10" fill="#f3e5f5" stroke="#3949ab" stroke-width="2" />
                            <text x="0" y="5" font-family="Inter" font-size="12" text-anchor="middle" fill="#1a237e">Magnitudes y Ecuaciones</text>
                        </g>
                        <g transform="translate(200, 450)">
                            <rect x="-60" y="-30" width="120" height="60" rx="10" fill="#fff9c4" stroke="#3949ab" stroke-width="2" />
                            <text x="0" y="5" font-family="Inter" font-size="12" text-anchor="middle" fill="#1a237e">Fenómenos (Reflex, etc)</text>
                        </g>
                        <g transform="translate(600, 450)">
                            <rect x="-60" y="-30" width="120" height="60" rx="10" fill="#c8e6c9" stroke="#3949ab" stroke-width="2" />
                            <text x="0" y="5" font-family="Inter" font-size="12" text-anchor="middle" fill="#1a237e">Aplicaciones Tecnológicas</text>
                        </g>
                    </g>
                </svg>
            </div>
        `
    },
    {
        // 4. Historia
        content: `
            <h1 class="page-title">Línea de Tiempo y Reseña Histórica</h1>
            
            <h2 class="section-title">Hitos Históricos</h2>
            <div style="border-left: 3px solid var(--color-accent); padding-left: 20px; margin-top: 20px;">
                <div style="margin-bottom: 15px;">
                    <h3 style="color: var(--color-text-main);">Christiaan Huygens (1678)</h3>
                    <p>Propuso la teoría ondulatoria de la luz. (Principio de Huygens).</p>
                </div>
                <div style="margin-bottom: 15px;">
                    <h3 style="color: var(--color-text-main);">Thomas Young (1801)</h3>
                    <p>Realizó el experimento de la doble rendija, demostrando la interferencia de la luz.</p>
                </div>
                <div style="margin-bottom: 15px;">
                    <h3 style="color: var(--color-text-main);">Augustin-Jean Fresnel (1815)</h3>
                    <p>Desarrolló matemáticamente la teoría ondulatoria de la luz para explicar la difracción.</p>
                </div>
                <div style="margin-bottom: 15px;">
                    <h3 style="color: var(--color-text-main);">James Clerk Maxwell (1865)</h3>
                    <p>Teoría electromagnética, unificando electricidad, magnetismo y óptica.</p>
                </div>
                <div style="margin-bottom: 15px;">
                    <h3 style="color: var(--color-text-main);">Heinrich Rudolf Hertz (1887)</h3>
                    <p>Comprobación experimental de las ondas electromagnéticas.</p>
                </div>
            </div>
            
            <h2 class="section-title">Reseña Histórica</h2>
            <p>Desde la antigüedad, la humanidad observó la propagación de perturbaciones en el agua y el sonido en el aire. Sin embargo, no fue hasta el siglo XVII cuando se comenzaron a formular teorías matemáticas para describir estos fenómenos. El debate entre la teoría corpuscular de Newton y la teoría ondulatoria de Huygens dominó la óptica durante más de un siglo. Finalmente, los experimentos de Young y el marco teórico de Maxwell establecieron la comprensión moderna de que la luz y otras radiaciones son, de hecho, movimientos ondulatorios electromagnéticos, abriendo la puerta a las telecomunicaciones modernas.</p>
        `
    },
    {
        // 5. Tema 1
        content: `
            <h1 class="page-title">Tema 1: Concepto de movimiento ondulatorio</h1>
            <p>El <strong>movimiento ondulatorio</strong> es el proceso mediante el cual se propaga una perturbación de un lugar a otro en el espacio. Esta perturbación transporta energía y cantidad de movimiento sin que exista, en general, un transporte neto de materia.</p>
            
            <h2 class="section-title">Características</h2>
            <ul>
                <li><strong>Perturbación y propagación:</strong> Una onda comienza con un oscilador (fuente) que altera el estado de equilibrio de un sistema. Dicha alteración viaja por el medio.</li>
                <li><strong>Medio de propagación:</strong> Entorno a través del cual viaja la perturbación. Las ondas mecánicas necesitan medios materiales (sólido, líquido, gas), mientras que las electromagnéticas pueden viajar por el vacío.</li>
                <li><strong>Transporte de energía:</strong> Las partículas del medio oscilan localmente, transmitiendo energía a las adyacentes, pero su posición promedio se mantiene.</li>
            </ul>
            
            <div class="interactive-widget" style="background:#e8eaf6; padding:15px; border-radius:8px;">
                <p><strong>Ejemplo cotidiano:</strong> Cuando tiras una piedra a un estanque, ves círculos (ondas) expandiéndose. Las hojas que flotan en el agua solo suben y bajan (oscilan localmente), no son arrastradas por la onda. La energía cinética de la piedra se transporta por el agua.</p>
            </div>
        `
    },
    {
        // 6. Tema 2 y 3
        content: `
            <h1 class="page-title">Tema 2: Clasificación de las ondas</h1>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px; background: white; font-size: 0.95rem;">
                <tr style="background: var(--color-pastel-blue); border-bottom: 2px solid var(--color-accent);">
                    <th style="padding: 10px; text-align: left;">Clasificación</th>
                    <th style="padding: 10px; text-align: left;">Tipos</th>
                    <th style="padding: 10px; text-align: left;">Definición y Ejemplos</th>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px;">Según el medio</td>
                    <td style="padding: 10px;">Mecánicas / Electromagnéticas</td>
                    <td style="padding: 10px;">Las mecánicas requieren medio (sonido). Las electromagnéticas se propagan en el vacío (luz).</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px;">Según la dirección</td>
                    <td style="padding: 10px;">Transversales / Longitudinales</td>
                    <td style="padding: 10px;">Transversal: el medio oscila perpendicular a la propagación (cuerda). Longitudinal: paralela a la propagación (sonido).</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px;">Según propagación</td>
                    <td style="padding: 10px;">Viajeras / Estacionarias</td>
                    <td style="padding: 10px;">Viajeras: se desplazan en una dirección. Estacionarias: confinadas en una región, formadas por superposición.</td>
                </tr>
            </table>
            
            <h1 class="page-title" style="margin-top: 30px;">Tema 3: Elementos y magnitudes</h1>
            <ul>
                <li><strong>Cresta y Valle:</strong> Puntos máximos (cresta) y mínimos (valle) del desplazamiento transversal.</li>
                <li><strong>Línea de equilibrio:</strong> Posición de reposo de las partículas del medio.</li>
                <li><strong>Amplitud ($A$):</strong> Desplazamiento máximo respecto al equilibrio. Unidad: metro (m).</li>
                <li><strong>Longitud de onda ($\\lambda$):</strong> Distancia entre dos crestas consecutivas (un ciclo espacial). Unidad: metro (m).</li>
                <li><strong>Fase ($\\phi$):</strong> Estado angular de la vibración. Diferencia de fase indica el retardo entre dos puntos.</li>
            </ul>
        `
    },
    {
        // 7. Tema 4 y 5
        content: `
            <h1 class="page-title">Tema 4: Período y frecuencia</h1>
            <p>Las características temporales de la oscilación en un punto fijo del espacio son:</p>
            <ul>
                <li><strong>Período ($T$):</strong> Tiempo necesario para que se complete un ciclo completo (o para que la onda avance una longitud de onda). Unidad: segundo (s).</li>
                <li><strong>Frecuencia ($f$):</strong> Número de ciclos completados por unidad de tiempo. Equivalente a la inversa del período. Unidad: hercio (Hz).</li>
            </ul>
            $$ f = \\frac{1}{T} \\quad ; \\quad T = \\frac{1}{f} $$
            <p>Nota: 1 Hz = 1 ciclo/s. También se usan kHz ($10^3$ Hz) o MHz ($10^6$ Hz).</p>
            
            <h1 class="page-title" style="margin-top: 30px;">Tema 5: Longitud de onda y velocidad</h1>
            <p>La velocidad de propagación ($v$) relaciona la dimensión espacial de la onda con su dimensión temporal.</p>
            $$ v = \\lambda f \\quad ; \\quad \\lambda = \\frac{v}{f} \\quad ; \\quad f = \\frac{v}{\\lambda} $$
            
            <p>La velocidad depende exclusivamente de las propiedades del medio, no de la frecuencia ni de la amplitud (en regímenes lineales). Por ejemplo, para ondas electromagnéticas en el vacío:</p>
            $$ c \\approx 3.00 \\times 10^8 \\text{ m/s} $$
        `
    },
    {
        // 8. Tema 6 y 7
        content: `
            <h1 class="page-title">Tema 6: Ecuación matemática de la onda armónica</h1>
            <p>El desplazamiento transversal de una partícula ubicada en $x$, en el instante $t$, se describe con:</p>
            $$ y(x,t) = A \\sin(kx - \\omega t + \\phi_0) $$
            
            <ul>
                <li>$y(x,t)$: Desplazamiento transversal (m).</li>
                <li>$A$: Amplitud (m).</li>
                <li>$k$: Número de onda angular, donde $k = \\frac{2\\pi}{\\lambda}$ (rad/m).</li>
                <li>$\\omega$: Frecuencia angular, donde $\\omega = 2\\pi f = \\frac{2\\pi}{T}$ (rad/s).</li>
                <li>$\\phi_0$: Fase inicial (rad).</li>
            </ul>
            <p>El signo "-" dentro del argumento indica que la onda se propaga hacia la derecha (en la dirección $+x$). La velocidad de propagación también puede escribirse como $v = \\frac{\\omega}{k}$.</p>
            
            <h1 class="page-title" style="margin-top: 30px;">Tema 7: Ecuación diferencial de onda</h1>
            <p>La función descrita arriba es una solución a la ecuación diferencial general unidimensional de onda ideal:</p>
            $$ \\frac{\\partial^2 y}{\\partial x^2} = \\frac{1}{v^2} \\frac{\\partial^2 y}{\\partial t^2} $$
            <p>Esta ecuación modela fenómenos físicos que se propagan sin distorsión a velocidad constante $v$.</p>
        `
    },
    {
        // 9. Tema 8 y 9
        content: `
            <h1 class="page-title">Tema 8: Velocidad y aceleración transversal</h1>
            <p>Las partículas del medio oscilan perpendicularmente a la propagación (onda transversal). Su velocidad transversal se obtiene derivando $y(x,t)$ respecto al tiempo:</p>
            $$ v_y(x,t) = \\frac{\\partial y}{\\partial t} = -A\\omega \\cos(kx - \\omega t + \\phi_0) $$
            <p>Derivando de nuevo, hallamos la aceleración transversal:</p>
            $$ a_y(x,t) = \\frac{\\partial^2 y}{\\partial t^2} = -A\\omega^2 \\sin(kx - \\omega t + \\phi_0) = -\\omega^2 y(x,t) $$
            <p>⚠️ <strong>Atención:</strong> ¡No confundas la velocidad transversal oscilatoria de la partícula ($v_y$) con la velocidad de propagación de la onda ($v$)!</p>
            
            <h1 class="page-title" style="margin-top: 30px;">Tema 9: Potencia y transporte de energía</h1>
            <p>Para una onda transversal en una cuerda ideal de densidad lineal $\\mu$, la potencia media transmitida es:</p>
            $$ P_{\\text{media}} = \\frac{1}{2}\\mu\\omega^2 A^2 v $$
            <p>La potencia es proporcional al cuadrado de la amplitud y al cuadrado de la frecuencia angular. Esta energía es transportada por la onda a velocidad $v$.</p>
        `
    },
    {
        // 10. Tema 10 y 11
        content: `
            <h1 class="page-title">Tema 10: Principio de superposición</h1>
            <p>En medios lineales, el desplazamiento resultante de dos o más ondas es la suma algebraica de los desplazamientos de cada una de ellas:</p>
            <ul>
                <li><strong>Interferencia constructiva:</strong> Ambas ondas están en fase, las crestas coinciden, la amplitud resultante se suma.</li>
                <li><strong>Interferencia destructiva:</strong> Las ondas están en contrafase (diferencia de fase de $\\pi$ rad), una cresta coincide con un valle, y se cancelan.</li>
            </ul>
            
            <h1 class="page-title" style="margin-top: 30px;">Tema 11: Ondas estacionarias</h1>
            <p>Cuando dos ondas idénticas viajan en sentidos opuestos, la superposición crea una onda estacionaria con nodos (amplitud cero) y antinodos (amplitud máxima). Para una cuerda de longitud $L$ fija en ambos extremos, los modos de oscilación permitidos están dados por:</p>
            $$ \\lambda_n = \\frac{2L}{n} \\quad ; \\quad f_n = \\frac{nv}{2L} \\quad (n=1,2,3\\ldots) $$
        `
    },
    {
        // 11. Tema 12
        content: `
            <h1 class="page-title">Tema 12: Fenómenos Ondulatorios</h1>
            <ul>
                <li><strong>Reflexión:</strong> Rebote de una onda al chocar con una frontera (Ej. eco). El ángulo de incidencia es igual al de reflexión.</li>
                <li><strong>Refracción:</strong> Cambio de dirección y velocidad de propagación al pasar de un medio a otro. Gobierna la <em>Ley de Snell</em>:
                $$ n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2 $$</li>
                <li><strong>Difracción:</strong> Curvatura de las ondas al pasar por aberturas u obstáculos de tamaño comparable a la longitud de onda.</li>
                <li><strong>Polarización:</strong> Exclusivo de las ondas transversales, ocurre cuando el plano de oscilación se restringe a una sola dirección.</li>
                <li><strong>Dispersión:</strong> Separación de una onda en sus diferentes frecuencias debido a que la velocidad en el medio depende de la frecuencia (Ej. arcoíris).</li>
                <li><strong>Resonancia:</strong> Incremento severo de amplitud cuando un sistema es excitado a su frecuencia natural.</li>
            </ul>
        `
    },
    {
        // 12. Tema 13 y 14
        content: `
            <h1 class="page-title">Tema 13: Ondas sonoras y acústica</h1>
            <p>El sonido es una onda mecánica longitudinal que se propaga a través de variaciones de presión en medios fluidos y elásticos.</p>
            <ul>
                <li><strong>Velocidad del sonido:</strong> En el aire a $20^\\circ \\text{C}$ es $\\approx 343 \\text{ m/s}$.</li>
                <li><strong>Tono y Timbre:</strong> Tono depende de la frecuencia. Timbre depende de la composición armónica.</li>
                <li><strong>Efecto Doppler:</strong> Cambio aparente en la frecuencia debido al movimiento relativo entre fuente y observador.</li>
            </ul>
            <p><strong>Nivel de intensidad sonora ($\\beta$):</strong> Expresado en decibelios (dB).</p>
            $$ \\beta = 10 \\log_{10}\\left(\\frac{I}{I_0}\\right) $$
            <p>Donde $I_0 = 10^{-12} \\text{ W/m}^2$.</p>
            
            <h1 class="page-title" style="margin-top: 30px;">Tema 14: Ondas electromagnéticas</h1>
            <p>Se componen de campos eléctricos y magnéticos mutuamente perpendiculares y perpendiculares a la dirección de propagación. Pueden viajar en el vacío. El espectro electromagnético se clasifica (de menor a mayor energía) en: ondas de radio, microondas, infrarrojo, luz visible, ultravioleta, rayos X y rayos gamma.</p>
        `
    },
    {
        // 13. Tema 15, 16, 17
        content: `
            <h1 class="page-title">Tema 15: Aplicaciones del movimiento ondulatorio</h1>
            <ul>
                <li><strong>Comunicaciones:</strong> Fibra óptica (reflexión total interna), WiFi y 5G (microondas y radio).</li>
                <li><strong>Medicina:</strong> Ecografías (ultrasonido), Rayos X para diagnóstico óseo.</li>
                <li><strong>Música y Acústica:</strong> Instrumentos musicales basados en cuerdas o tubos (ondas estacionarias).</li>
                <li><strong>Navegación:</strong> Radar (ondas EM) y Sonar (ondas mecánicas subacuáticas).</li>
            </ul>
            
            <h1 class="page-title" style="margin-top: 30px;">Tema 16: Errores frecuentes</h1>
            <div style="background:#ffebee; padding:15px; border-radius:8px;">
                <h3 style="color:#c62828;">Errores a evitar:</h3>
                <ul>
                    <li>Confundir velocidad de propagación $v$ (constante en un medio) con velocidad transversal $v_y$ (que oscila en el tiempo).</li>
                    <li>Olvidar que en $\\omega t - kx$ los radianes de la calculadora son obligatorios.</li>
                </ul>
            </div>
            
            <h1 class="page-title" style="margin-top: 30px;">Tema 17: Resumen conceptual</h1>
            <table style="width: 100%; border-collapse: collapse; background: white; font-size: 0.95rem;">
                <tr style="background: var(--color-pastel-lila);">
                    <th style="padding:10px;text-align:left;">Magnitud</th>
                    <th style="padding:10px;text-align:left;">Símbolo / Ecuación</th>
                    <th style="padding:10px;text-align:left;">Unidad (SI)</th>
                </tr>
                <tr style="border-bottom: 1px solid #ccc;"><td style="padding:10px;">Frecuencia Angular</td><td style="padding:10px;">$\\omega = 2\\pi f$</td><td style="padding:10px;">rad/s</td></tr>
                <tr style="border-bottom: 1px solid #ccc;"><td style="padding:10px;">Número de Onda</td><td style="padding:10px;">$k = \\frac{2\\pi}{\\lambda}$</td><td style="padding:10px;">rad/m</td></tr>
                <tr style="border-bottom: 1px solid #ccc;"><td style="padding:10px;">Velocidad Propagación</td><td style="padding:10px;">$v = \\lambda f = \\frac{\\omega}{k}$</td><td style="padding:10px;">m/s</td></tr>
            </table>
        `
    },
    {
        // 14. Ejercicios Resueltos y Propuestos
        content: `
            <h1 class="page-title">Ejercicios Resueltos y Propuestos</h1>
            
            <div class="interactive-widget">
                <h3>Ejercicio Resuelto 1: Onda viajera transversal</h3>
                <p><strong>Enunciado:</strong> Una onda transversal tiene la ecuación: $y(x,t) = 0.05 \\sin(10\\pi x - 50\\pi t)$. Calcula su velocidad de propagación.</p>
                <hr style="margin:10px 0; border:0; border-top: 1px solid #ccc;" />
                <p><strong>1. Datos conocidos:</strong></p>
                <div style="color: #1565c0; font-weight:bold;">$A = 0.05 \\text{ m} \\quad ; \\quad k = 10\\pi \\text{ rad/m} \\quad ; \\quad \\omega = 50\\pi \\text{ rad/s}$</div>
                <p><strong>2. Fórmulas y Cálculo:</strong></p>
                $$ v = \\frac{\\omega}{k} = \\frac{50\\pi}{10\\pi} $$
                <div style="color: #ef6c00; font-weight:bold; font-size:1.2rem; text-align:center;">$v = 5 \\text{ m/s}$</div>
            </div>
            
            <div class="interactive-widget">
                <h3>Problema Propuesto (Nivel Básico)</h3>
                <p>Si la velocidad del sonido es de 340 m/s, determina el rango de longitudes de onda audibles (20 Hz a 20,000 Hz).</p>
                <div style="margin-top: 15px;">
                    <button id="btn-hint-1" style="padding:8px 15px; border-radius:5px; border:none; background:#ffb74d; cursor:pointer;">Mostrar Pista</button>
                    <button id="btn-sol-1" style="padding:8px 15px; border-radius:5px; border:none; background:#1a237e; color:white; cursor:pointer;">Mostrar Solución</button>
                </div>
                <p id="txt-hint-1" style="display:none; color:#ef6c00; margin-top:10px;"><em>Pista: Usa la fórmula $\\lambda = \\frac{v}{f}$ para los dos valores extremos.</em></p>
                <div id="txt-sol-1" style="display:none; margin-top:10px; background:#f5f5f5; padding:15px; border-radius:5px;">
                    $$ \\lambda_{\\text{máx}} = \\frac{340}{20} = 17 \\text{ m} $$
                    $$ \\lambda_{\\text{mín}} = \\frac{340}{20000} = 0.017 \\text{ m} = 1.7 \\text{ cm} $$
                </div>
            </div>
        `,
        onLoad: () => {
            const btnHint1 = document.getElementById('btn-hint-1');
            const txtHint1 = document.getElementById('txt-hint-1');
            const btnSol1 = document.getElementById('btn-sol-1');
            const txtSol1 = document.getElementById('txt-sol-1');
            
            if(btnHint1) btnHint1.addEventListener('click', () => { txtHint1.style.display = 'block'; });
            if(btnSol1) btnSol1.addEventListener('click', () => { txtSol1.style.display = 'block'; });
        }
    },
    {
        // 15. Simulación A y B: Onda Viajera y Comparador
        content: `
            <h1 class="page-title">Simulaciones: Onda Viajera y Comparador</h1>
            
            <div class="interactive-widget">
                <h3>Simulación A: Onda Armónica Viajera (Tiempo Real)</h3>
                <canvas id="sim-a-canvas" width="800" height="200" style="width:100%; max-width:800px; background:#fafafa; border:1px solid #ccc;"></canvas>
                <div class="controls-panel">
                    <div class="control-group">
                        <label>Frecuencia ($f$): <span id="val-a-f">1.0</span> Hz</label>
                        <input type="range" id="sim-a-f" min="0.1" max="3" step="0.1" value="1.0">
                    </div>
                    <div class="control-group">
                        <label>Amplitud ($A$): <span id="val-a-a">1.0</span> m</label>
                        <input type="range" id="sim-a-a" min="0.1" max="2" step="0.1" value="1.0">
                    </div>
                    <div class="control-group">
                        <label>Dirección</label>
                        <select id="sim-a-dir" style="padding:5px; border-radius:4px;">
                            <option value="right">Hacia +x</option>
                            <option value="left">Hacia -x</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="interactive-widget">
                <h3>Simulación B: Comparador de Ondas</h3>
                <canvas id="sim-b-canvas" width="800" height="200" style="width:100%; max-width:800px; background:#fafafa; border:1px solid #ccc;"></canvas>
                <div class="controls-panel">
                    <div class="control-group" style="border-left:4px solid blue; padding-left:10px;">
                        <label>Onda 1 - Freq: <span id="val-b-f1">1.0</span> Hz</label>
                        <input type="range" id="sim-b-f1" min="0.5" max="3" step="0.5" value="1.0">
                    </div>
                    <div class="control-group" style="border-left:4px solid red; padding-left:10px;">
                        <label>Onda 2 - Freq: <span id="val-b-f2">2.0</span> Hz</label>
                        <input type="range" id="sim-b-f2" min="0.5" max="3" step="0.5" value="2.0">
                    </div>
                </div>
            </div>
        `,
        onLoad: () => {
            let reqA, reqB;
            // Sim A
            const cvsA = document.getElementById('sim-a-canvas');
            if(cvsA) {
                const ctxA = cvsA.getContext('2d');
                let timeA = 0;
                function drawA() {
                    timeA += 0.05;
                    const f = parseFloat(document.getElementById('sim-a-f').value);
                    const A = parseFloat(document.getElementById('sim-a-a').value) * 40;
                    const dir = document.getElementById('sim-a-dir').value === 'right' ? -1 : 1;
                    document.getElementById('val-a-f').textContent = f.toFixed(1);
                    document.getElementById('val-a-a').textContent = (A/40).toFixed(1);
                    
                    const w = 2*Math.PI*f;
                    const k = 2*Math.PI / 200;
                    
                    ctxA.clearRect(0,0,cvsA.width,cvsA.height);
                    ctxA.beginPath(); ctxA.strokeStyle='#ccc'; ctxA.moveTo(0,100); ctxA.lineTo(800,100); ctxA.stroke();
                    
                    ctxA.beginPath(); ctxA.strokeStyle='#3949ab'; ctxA.lineWidth=3;
                    for(let x=0; x<cvsA.width; x++){
                        const y = 100 - A*Math.sin(k*x + dir*w*(timeA/2));
                        if(x===0) ctxA.moveTo(x,y); else ctxA.lineTo(x,y);
                    }
                    ctxA.stroke();
                    reqA = requestAnimationFrame(drawA);
                }
                drawA();
            }

            // Sim B
            const cvsB = document.getElementById('sim-b-canvas');
            if(cvsB) {
                const ctxB = cvsB.getContext('2d');
                let timeB = 0;
                function drawB() {
                    timeB += 0.05;
                    const f1 = parseFloat(document.getElementById('sim-b-f1').value);
                    const f2 = parseFloat(document.getElementById('sim-b-f2').value);
                    document.getElementById('val-b-f1').textContent = f1.toFixed(1);
                    document.getElementById('val-b-f2').textContent = f2.toFixed(1);
                    
                    const w1 = 2*Math.PI*f1;
                    const w2 = 2*Math.PI*f2;
                    const k = 2*Math.PI / 200;
                    
                    ctxB.clearRect(0,0,cvsB.width,cvsB.height);
                    ctxB.beginPath(); ctxB.strokeStyle='#ccc'; ctxB.moveTo(0,100); ctxB.lineTo(800,100); ctxB.stroke();
                    
                    // Onda 1
                    ctxB.beginPath(); ctxB.strokeStyle='rgba(0,0,255,0.7)'; ctxB.lineWidth=2;
                    for(let x=0; x<cvsB.width; x++){
                        const y = 100 - 40*Math.sin(k*x - w1*(timeB/2));
                        if(x===0) ctxB.moveTo(x,y); else ctxB.lineTo(x,y);
                    }
                    ctxB.stroke();
                    // Onda 2
                    ctxB.beginPath(); ctxB.strokeStyle='rgba(255,0,0,0.7)'; ctxB.lineWidth=2;
                    for(let x=0; x<cvsB.width; x++){
                        const y = 100 - 40*Math.sin(k*x - w2*(timeB/2));
                        if(x===0) ctxB.moveTo(x,y); else ctxB.lineTo(x,y);
                    }
                    ctxB.stroke();

                    reqB = requestAnimationFrame(drawB);
                }
                drawB();
            }

            document.addEventListener('gotoPage', function stopAnim(){
                cancelAnimationFrame(reqA);
                cancelAnimationFrame(reqB);
                document.removeEventListener('gotoPage', stopAnim);
            });
        }
    },
    {
        // 16. Simulación C y D: Superposición y Estacionarias
        content: `
            <h1 class="page-title">Simulaciones: Superposición y Ondas Estacionarias</h1>
            
            <div class="interactive-widget">
                <h3>Simulación C: Superposición e Interferencia</h3>
                <p>Observa la onda resultante (negra) de la suma de dos ondas (azul y roja).</p>
                <canvas id="sim-c-canvas" width="800" height="250" style="width:100%; max-width:800px; background:#fafafa; border:1px solid #ccc;"></canvas>
                <div class="controls-panel">
                    <div class="control-group">
                        <label>Diferencia de Fase ($\\Delta\\phi$): <span id="val-c-fase">0</span> rad</label>
                        <input type="range" id="sim-c-fase" min="0" max="6.28" step="0.314" value="0">
                    </div>
                </div>
            </div>

            <div class="interactive-widget">
                <h3>Simulación D: Ondas Estacionarias</h3>
                <p>Una cuerda fija en los extremos. Selecciona el número de armónico ($n$).</p>
                <canvas id="sim-d-canvas" width="800" height="200" style="width:100%; max-width:800px; background:#222; border-radius:8px;"></canvas>
                <div class="controls-panel">
                    <div class="control-group">
                        <label style="color:white; background:#222; padding:2px 5px; border-radius:4px;">Armónico ($n$): <span id="val-d-n">1</span></label>
                        <input type="range" id="sim-d-n" min="1" max="5" step="1" value="1">
                    </div>
                </div>
            </div>
        `,
        onLoad: () => {
            let reqC, reqD;
            // Sim C
            const cvsC = document.getElementById('sim-c-canvas');
            if(cvsC) {
                const ctxC = cvsC.getContext('2d');
                let timeC = 0;
                function drawC() {
                    timeC += 0.05;
                    const dPhase = parseFloat(document.getElementById('sim-c-fase').value);
                    document.getElementById('val-c-fase').textContent = dPhase.toFixed(2);
                    
                    const w = 2*Math.PI*1;
                    const k = 2*Math.PI / 200;
                    
                    ctxC.clearRect(0,0,cvsC.width,cvsC.height);
                    ctxC.beginPath(); ctxC.strokeStyle='#ccc'; ctxC.moveTo(0,125); ctxC.lineTo(800,125); ctxC.stroke();
                    
                    ctxC.beginPath(); ctxC.strokeStyle='rgba(0,0,255,0.4)'; ctxC.lineWidth=2;
                    for(let x=0; x<cvsC.width; x++){
                        const y = 125 - 40*Math.sin(k*x - w*(timeC/2));
                        if(x===0) ctxC.moveTo(x,y); else ctxC.lineTo(x,y);
                    }
                    ctxC.stroke();
                    
                    ctxC.beginPath(); ctxC.strokeStyle='rgba(255,0,0,0.4)'; ctxC.lineWidth=2;
                    for(let x=0; x<cvsC.width; x++){
                        const y = 125 - 40*Math.sin(k*x - w*(timeC/2) + dPhase);
                        if(x===0) ctxC.moveTo(x,y); else ctxC.lineTo(x,y);
                    }
                    ctxC.stroke();

                    // Resultante
                    ctxC.beginPath(); ctxC.strokeStyle='#000'; ctxC.lineWidth=3;
                    for(let x=0; x<cvsC.width; x++){
                        const y = 125 - 40*Math.sin(k*x - w*(timeC/2)) - 40*Math.sin(k*x - w*(timeC/2) + dPhase);
                        if(x===0) ctxC.moveTo(x,y); else ctxC.lineTo(x,y);
                    }
                    ctxC.stroke();

                    reqC = requestAnimationFrame(drawC);
                }
                drawC();
            }

            // Sim D
            const cvsD = document.getElementById('sim-d-canvas');
            if(cvsD) {
                const ctxD = cvsD.getContext('2d');
                let timeD = 0;
                function drawD() {
                    timeD += 0.1;
                    const n = parseInt(document.getElementById('sim-d-n').value);
                    document.getElementById('val-d-n').textContent = n;
                    
                    const L = cvsD.width;
                    const k = (n * Math.PI) / L;
                    const w = n; // Freq grows with n
                    
                    ctxD.clearRect(0,0,cvsD.width,cvsD.height);
                    ctxD.beginPath(); ctxD.strokeStyle='#444'; ctxD.moveTo(0,100); ctxD.lineTo(800,100); ctxD.stroke();
                    
                    ctxD.beginPath(); ctxD.strokeStyle='#00e676'; ctxD.lineWidth=4;
                    for(let x=0; x<cvsD.width; x++){
                        // envelope = 2A * sin(kx), full eq: 2A sin(kx) cos(wt)
                        const A = 60;
                        const y = 100 - A * Math.sin(k*x) * Math.cos(w*timeD);
                        if(x===0) ctxD.moveTo(x,y); else ctxD.lineTo(x,y);
                    }
                    ctxD.stroke();

                    reqD = requestAnimationFrame(drawD);
                }
                drawD();
            }

            document.addEventListener('gotoPage', function stopAnim(){
                cancelAnimationFrame(reqC);
                cancelAnimationFrame(reqD);
                document.removeEventListener('gotoPage', stopAnim);
            });
        }
    },
    {
        // 17. Simulación E y F
        content: `
            <h1 class="page-title">Simulaciones: Fenómenos y Sonido</h1>
            
            <div class="interactive-widget">
                <h3>Simulación E: Reflexión (Pulso)</h3>
                <p>Observa cómo se invierte el pulso al reflejarse en un extremo fijo.</p>
                <canvas id="sim-e-canvas" width="800" height="150" style="width:100%; max-width:800px; background:#fafafa; border:1px solid #ccc;"></canvas>
            </div>
            
            <div class="interactive-widget">
                <h3>Simulación F: Laboratorio de Sonido (Osciloscopio Visual)</h3>
                <p>Las ondas de sonido son longitudinales, pero solemos representarlas como variaciones de presión transversales. Aquí vemos la diferencia entre un tono grave (baja frecuencia) y agudo (alta frecuencia).</p>
                <div id="plot-sound" style="width:100%; height:250px;"></div>
                <div class="controls-panel">
                    <div class="control-group">
                        <label>Tono: <span id="val-f-f">Grave (Baja Freq)</span></label>
                        <input type="range" id="sim-f-f" min="1" max="5" step="1" value="1">
                    </div>
                </div>
            </div>
        `,
        onLoad: () => {
            let reqE;
            // Sim E (Pulso)
            const cvsE = document.getElementById('sim-e-canvas');
            if(cvsE) {
                const ctxE = cvsE.getContext('2d');
                let pos = 0;
                let dir = 1;
                function drawE() {
                    pos += 5 * dir;
                    if(pos > cvsE.width - 50) dir = -1; // Reflect and invert
                    if(pos < 50) dir = 1; 

                    ctxE.clearRect(0,0,cvsE.width,cvsE.height);
                    ctxE.beginPath(); ctxE.strokeStyle='#ccc'; ctxE.moveTo(0,75); ctxE.lineTo(800,75); ctxE.stroke();
                    
                    // Draw pulse (Gaussian)
                    ctxE.beginPath(); ctxE.strokeStyle='#d32f2f'; ctxE.lineWidth=3;
                    for(let x=0; x<cvsE.width; x++){
                        const A = 50 * dir; // Inverts when reflecting
                        const dx = x - pos;
                        const y = 75 - A * Math.exp(-(dx*dx)/1000);
                        if(x===0) ctxE.moveTo(x,y); else ctxE.lineTo(x,y);
                    }
                    ctxE.stroke();
                    
                    // Fixed end
                    ctxE.fillStyle='#000'; ctxE.fillRect(cvsE.width-5, 50, 10, 50);

                    reqE = requestAnimationFrame(drawE);
                }
                drawE();
            }

            // Sim F (Plotly)
            const inputF = document.getElementById('sim-f-f');
            const valF = document.getElementById('val-f-f');
            function drawF() {
                const f = parseInt(inputF.value);
                valF.textContent = f === 1 ? 'Grave' : (f === 5 ? 'Agudo' : 'Medio');
                
                const x=[], y=[];
                for(let i=0; i<=10; i+=0.05){
                    x.push(i);
                    y.push(Math.sin(f * i)); // simple variation
                }
                Plotly.newPlot('plot-sound', [{
                    x: x, y: y, type: 'scatter', mode: 'lines', line: {color: '#8e24aa', width:3, shape:'spline'}
                }], { margin: {t:10, b:40, l:40, r:10}, xaxis:{range:[0,10]}, yaxis:{range:[-1.5,1.5]}, showlegend:false }, {displayModeBar: false});
            }
            if(inputF) {
                inputF.addEventListener('input', drawF);
                drawF();
            }

            document.addEventListener('gotoPage', function stopAnim(){
                cancelAnimationFrame(reqE);
                document.removeEventListener('gotoPage', stopAnim);
            });
        }
    },
    {
        // 18. Simulación 3D
        content: `
            <h1 class="page-title">Simulación 3D: Propagación Tridimensional</h1>
            <p>Observa la propagación de una onda en una superficie 3D (como una membrana elástica excitada).</p>
            <div class="interactive-widget" style="padding: 10px;">
                <div id="sim-3d-container" style="width:100%; height:400px; background:#111; border-radius:8px; overflow:hidden;"></div>
                <div class="controls-panel" style="justify-content:center; margin-top:15px;">
                    <div class="control-group">
                        <label>Frecuencia ($f$): <span id="val-3d-f">1.0</span></label>
                        <input type="range" id="sim-3d-f" min="0.5" max="3" step="0.1" value="1.0">
                    </div>
                    <div class="control-group">
                        <label>Amplitud ($A$): <span id="val-3d-a">2.0</span></label>
                        <input type="range" id="sim-3d-a" min="1" max="5" step="0.5" value="2.0">
                    </div>
                </div>
            </div>
        `,
        onLoad: () => {
            const container = document.getElementById('sim-3d-container');
            if(!container) return;
            
            // Setup Three.js scene
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
            camera.position.set(20, 20, 20);
            camera.lookAt(0, 0, 0);
            
            const renderer = new THREE.WebGLRenderer({antialias: true});
            renderer.setSize(container.clientWidth, container.clientHeight);
            container.appendChild(renderer.domElement);
            
            // Grid geometry
            const size = 30;
            const segments = 60;
            const geometry = new THREE.PlaneGeometry(size, size, segments, segments);
            geometry.rotateX(-Math.PI / 2);
            
            // Material (Wireframe for clear visualization)
            const material = new THREE.MeshBasicMaterial({
                color: 0x00e676,
                wireframe: true
            });
            
            const plane = new THREE.Mesh(geometry, material);
            scene.add(plane);
            
            // Store original vertices Y positions
            const positionAttribute = geometry.getAttribute('position');
            const initialY = [];
            for (let i = 0; i < positionAttribute.count; i++) {
                initialY.push(positionAttribute.getY(i));
            }
            
            let req3D;
            let time3D = 0;
            
            function animate3D() {
                time3D += 0.05;
                const f = parseFloat(document.getElementById('sim-3d-f').value);
                const A = parseFloat(document.getElementById('sim-3d-a').value);
                document.getElementById('val-3d-f').textContent = f.toFixed(1);
                document.getElementById('val-3d-a').textContent = A.toFixed(1);
                
                const w = f;
                const k = 0.5;
                
                // Update vertices
                for (let i = 0; i < positionAttribute.count; i++) {
                    const x = positionAttribute.getX(i);
                    const z = positionAttribute.getZ(i);
                    // r is distance from center
                    const r = Math.sqrt(x*x + z*z);
                    // y = A * sin(k*r - w*t) / (r*0.2 + 1) (damping by distance)
                    const y = (A * Math.sin(k*r - w*time3D*2)) / (r*0.1 + 1);
                    positionAttribute.setY(i, y);
                }
                positionAttribute.needsUpdate = true;
                
                // Slowly rotate scene
                scene.rotation.y += 0.005;
                
                renderer.render(scene, camera);
                req3D = requestAnimationFrame(animate3D);
            }
            animate3D();
            
            document.addEventListener('gotoPage', function stopAnim(){
                cancelAnimationFrame(req3D);
                container.innerHTML = '';
                document.removeEventListener('gotoPage', stopAnim);
            });
        }
    },
    {
        // 19. Glosario y Referencias
        content: `
            <h1 class="page-title">Glosario y Referencias</h1>
            
            <h2 class="section-title">Glosario</h2>
            <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: var(--shadow-soft);">
                <p><strong>Amplitud ($A$):</strong> Valor máximo del desplazamiento respecto al equilibrio.</p>
                <p><strong>Frecuencia ($f$):</strong> Número de oscilaciones por unidad de tiempo. En hercios (Hz).</p>
                <p><strong>Nodo:</strong> Punto de una onda estacionaria que siempre tiene amplitud nula.</p>
                <p><strong>Interferencia:</strong> Superposición de dos o más ondas que resulta en un patrón combinado.</p>
            </div>
            
            <h2 class="section-title" style="margin-top:30px;">Referencias Bibliográficas</h2>
            <ul style="line-height: 1.8;">
                <li>Serway, R. A., & Jewett, J. W. (2018). <em>Física para ciencias e ingeniería</em> (10ma ed.). Cengage Learning.</li>
                <li>Sears, F. W., Zemansky, M. W., Young, H. D., & Freedman, R. A. (2018). <em>Física Universitaria</em> (14va ed.). Pearson Educación.</li>
                <li>Resnick, R., Halliday, D., & Krane, K. S. (2001). <em>Física Vol. 1</em> (5ta ed.). Grupo Editorial Patria.</li>
            </ul>
        `
    }
];

document.addEventListener('gotoPage', (e) => {
    // Escuchado globalmente por main.js
});
