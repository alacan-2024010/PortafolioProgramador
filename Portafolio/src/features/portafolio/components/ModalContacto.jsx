import { useState, useEffect, useRef } from "react";
import "../../../styles/ModalContacto.css";

const API_URL = import.meta.env.VITE_API_URL;

const LIMITES = {
  name: 100,
  email: 150,
  message: 2000,
};

const FORM_INICIAL = { name: "", email: "", message: "" };

export const ModalContacto = ({ isOpen, onClose }) => {
  const [form, setForm] = useState(FORM_INICIAL);
  const [estado, setEstado] = useState("idle"); // idle | enviando | ok | error
  const [errorMsg, setErrorMsg] = useState("");
  const primerCampoRef = useRef(null);

  // Cerrar con Escape + bloquear scroll de fondo mientras el modal está abierto
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    primerCampoRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Reset del formulario cada vez que se vuelve a abrir
  useEffect(() => {
    if (isOpen) {
      setForm(FORM_INICIAL);
      setEstado("idle");
      setErrorMsg("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (campo) => (e) => {
    setForm((prev) => ({ ...prev, [campo]: e.target.value }));
  };

  const emailValido = (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setEstado("error");
      setErrorMsg("Completa todos los campos.");
      return;
    }
    if (!emailValido(form.email)) {
      setEstado("error");
      setErrorMsg("Ingresa un correo válido.");
      return;
    }

    setEstado("enviando");
    setErrorMsg("");

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message || "No se pudo enviar el mensaje.");
      }

      setEstado("ok");
    } catch (err) {
      setEstado("error");
      setErrorMsg(err.message || "Ocurrió un error al enviar. Intenta de nuevo.");
    }
  };

  return (
    <div
      className="modal-contacto-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal-contacto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-contacto-titulo"
      >
        <span className="frame-corner frame-corner--tl" />
        <span className="frame-corner frame-corner--tr" />
        <span className="frame-corner frame-corner--bl" />
        <span className="frame-corner frame-corner--br" />

        <button
          type="button"
          className="modal-contacto-cerrar"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        {estado === "ok" ? (
          <div className="modal-contacto-exito">
            <span className="modal-contacto-exito-icono">✓</span>
            <h3 id="modal-contacto-titulo">¡Mensaje enviado!</h3>
            <p>Gracias por escribir, te responderé a tu correo lo antes posible.</p>
            <button type="button" className="modal-contacto-btn" onClick={onClose}>
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <h3 id="modal-contacto-titulo" className="modal-contacto-titulo">
              Enviarme un mensaje
            </h3>
            <p className="modal-contacto-subtitulo">
              Escríbeme y te respondo directo a tu correo.
            </p>

            <form className="modal-contacto-form" onSubmit={handleSubmit} noValidate>
              <label className="modal-contacto-campo">
                <span>Nombre</span>
                <input
                  ref={primerCampoRef}
                  type="text"
                  value={form.name}
                  maxLength={LIMITES.name}
                  onChange={handleChange("name")}
                  placeholder="Tu nombre"
                  disabled={estado === "enviando"}
                />
              </label>

              <label className="modal-contacto-campo">
                <span>Correo</span>
                <input
                  type="email"
                  value={form.email}
                  maxLength={LIMITES.email}
                  onChange={handleChange("email")}
                  placeholder="tucorreo@ejemplo.com"
                  disabled={estado === "enviando"}
                />
              </label>

              <label className="modal-contacto-campo">
                <span>Mensaje</span>
                <textarea
                  value={form.message}
                  maxLength={LIMITES.message}
                  onChange={handleChange("message")}
                  placeholder="Cuéntame en qué puedo ayudarte..."
                  rows={4}
                  disabled={estado === "enviando"}
                />
              </label>

              {estado === "error" && (
                <p className="modal-contacto-error">{errorMsg}</p>
              )}

              <button
                type="submit"
                className="modal-contacto-btn"
                disabled={estado === "enviando"}
              >
                {estado === "enviando" ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};