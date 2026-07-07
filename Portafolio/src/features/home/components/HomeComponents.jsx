import { useEffect, useRef, useState } from 'react';

const LINES = [
  { tokens: [{ t: 'const ', c: 'kw' }, { t: 'developer', c: 'var' }, { t: ' = {', c: 'punct' }] },
  { tokens: [{ t: '  name', c: 'prop' }, { t: ': ', c: 'punct' }, { t: "'Francisco Lacan'", c: 'str' }, { t: ',', c: 'punct' }] },
  { tokens: [{ t: '  role', c: 'prop' }, { t: ': ', c: 'punct' }, { t: "'Desarrollador web'", c: 'str' }, { t: ',', c: 'punct' }] },
  { tokens: [{ t: '  stack', c: 'prop' }, { t: ': [', c: 'punct' }, { t: "'JavaScript'", c: 'str' }, { t: ', ', c: 'punct' }, { t: "'React'", c: 'str' }, { t: ', ', c: 'punct' }, { t: "'Node.js'", c: 'str' }, { t: '],', c: 'punct' }] },
  { tokens: [{ t: '  available', c: 'prop' }, { t: ': ', c: 'punct' }, { t: 'true', c: 'bool' }] },
  { tokens: [{ t: '};', c: 'punct' }] },
];

const TYPE_SPEED_MS = 32;
const PAUSE_MS = 2200;

function buildLineTexts() {
  return LINES.map((line) => line.tokens.map((tok) => tok.t).join(''));
}

function renderTypedTokens(tokens, typedLen) {
  const nodes = [];
  let remaining = typedLen;

  for (let i = 0; i < tokens.length; i += 1) {
    if (remaining <= 0) break;
    const tok = tokens[i];
    const slice = tok.t.slice(0, remaining);
    nodes.push(
      <span key={i} className={`terminal-tok terminal-tok--${tok.c}`}>
        {slice}
      </span>
    );
    remaining -= tok.t.length;
  }

  return nodes;
}

function HomeComponents({ activo }) {
  const lineTexts = buildLineTexts();
  const lineLengths = lineTexts.map((t) => t.length);
  const totalChars = lineLengths.reduce((a, b) => a + b, 0);

  const [charCount, setCharCount] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!activo) return undefined;

    if (charCount < totalChars) {
      timeoutRef.current = setTimeout(() => setCharCount((c) => c + 1), TYPE_SPEED_MS);
    } else {
      timeoutRef.current = setTimeout(() => setCharCount(0), PAUSE_MS);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [activo, charCount, totalChars]);

  let before = 0;

  return (
    <div className="terminal-window">
      <div className="terminal-bar">
        <span className="terminal-dot terminal-dot--rojo" />
        <span className="terminal-dot terminal-dot--amarillo" />
        <span className="terminal-dot terminal-dot--verde" />
        <span className="terminal-titulo">portafolio.js</span>
      </div>

      <div className="terminal-body">
        {LINES.map((line, idx) => {
          const lineLen = lineLengths[idx];
          const typedLen = Math.max(0, Math.min(lineLen, charCount - before));
          const isActiveLine = charCount >= before && charCount < before + lineLen;
          const isLastLineDone = idx === LINES.length - 1 && charCount >= totalChars;
          before += lineLen;

          return (
            <div className="terminal-line" key={idx}>
              <span className="terminal-line-num">{idx + 1}</span>
              <span className="terminal-line-code">
                {renderTypedTokens(line.tokens, typedLen)}
                {(isActiveLine || isLastLineDone) && <span className="terminal-cursor">|</span>}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeComponents;