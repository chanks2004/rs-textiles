import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_TO = process.env.EMAIL_COTIZACIONES || "contactorstextiles@gmail.com";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const nombre = (formData.get("nombre") as string) || "";
    const empresa = (formData.get("empresa") as string) || "";
    const email = (formData.get("email") as string) || "";
    const telefono = (formData.get("telefono") as string) || "";
    const tipoPrenda = (formData.get("tipo-prenda") as string) || "";
    const cantidad = (formData.get("cantidad") as string) || "";
    const fechaEntrega = (formData.get("fecha-entrega") as string) || "";
    const comentarios = (formData.get("comentarios") as string) || "";

    const texto = [
      "Nueva solicitud de cotización - RS Textiles",
      "",
      "--- Datos del cliente ---",
      `Nombre: ${nombre}`,
      `Empresa: ${empresa || "(no indicada)"}`,
      `Email: ${email}`,
      `Teléfono: ${telefono}`,
      "",
      "--- Detalles del pedido ---",
      `Tipo de prenda: ${tipoPrenda}`,
      `Cantidad aproximada: ${cantidad}`,
      `Fecha estimada de entrega: ${fechaEntrega || "(no indicada)"}`,
      "",
      "--- Comentarios o detalles ---",
      comentarios || "(sin comentarios)",
    ].join("\n");

    const html = `
      <h2>Nueva solicitud de cotización - RS Textiles</h2>
      <h3>Datos del cliente</h3>
      <ul>
        <li><strong>Nombre:</strong> ${nombre}</li>
        <li><strong>Empresa:</strong> ${empresa || "(no indicada)"}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Teléfono:</strong> ${telefono}</li>
      </ul>
      <h3>Detalles del pedido</h3>
      <ul>
        <li><strong>Tipo de prenda:</strong> ${tipoPrenda}</li>
        <li><strong>Cantidad aproximada:</strong> ${cantidad}</li>
        <li><strong>Fecha estimada de entrega:</strong> ${fechaEntrega || "(no indicada)"}</li>
      </ul>
      <h3>Comentarios o detalles</h3>
      <p>${(comentarios || "(sin comentarios)").replace(/\n/g, "<br>")}</p>
    `;

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY no está configurada");
      return NextResponse.json(
        { error: "Servicio de email no configurado" },
        { status: 500 }
      );
    }

    const file = formData.get("diseno") as File | null;
    const attachments =
      file && file.size > 0
        ? [
            {
              filename: file.name,
              content: Buffer.from(await file.arrayBuffer()),
            },
          ]
        : undefined;

    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "RS Textiles <onboarding@resend.dev>",
      to: EMAIL_TO,
      subject: `Cotización: ${tipoPrenda} - ${nombre}`,
      text: texto,
      html,
      attachments,
    });

    if (error) {
      console.error("Error Resend:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error en API cotizar:", err);
    return NextResponse.json(
      { error: "Error al enviar la solicitud" },
      { status: 500 }
    );
  }
}
