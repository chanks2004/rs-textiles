/** Divisor entre secciones: bloque azul bien visible para separar */
export function SectionDivider() {
  return (
    <div
      className="w-full bg-primary"
      style={{ height: "12px" }}
      aria-hidden
      role="presentation"
    />
  );
}

/** Línea fina azul (alternativa para separar sin tanto peso) */
export function SectionLine() {
  return (
    <div
      className="w-full border-t-2 border-primary"
      aria-hidden
      role="presentation"
    />
  );
}
