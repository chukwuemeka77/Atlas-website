// src/lib/toast.ts
type ToastKind = "success" | "error" | "info";

const TOAST_CONTAINER_ID = "atlas-toast-container";
const DEFAULT_DURATION = 4500;

function ensureContainer() {
  if (typeof document === "undefined") return null;
  let container = document.getElementById(TOAST_CONTAINER_ID);
  if (!container) {
    container = document.createElement("div");
    container.id = TOAST_CONTAINER_ID;
    // position container top-right
    container.className = "fixed top-6 right-6 z-[99999] flex flex-col gap-3 max-w-sm";
    document.body.appendChild(container);
  }
  return container;
}

function createToastElement(message: string, kind: ToastKind) {
  const wrap = document.createElement("div");
  wrap.setAttribute("role", "status");
  wrap.className = [
    "shadow-lg",
    "rounded-lg",
    "p-3",
    "flex",
    "items-start",
    "gap-3",
    "text-sm",
    "animate-fade-in",
    "max-w-full",
    "break-words",
    "border",
    "border-gray-200",
  ].join(" ");

  // color by kind (tailwind classes)
  const colorClasses =
    kind === "success"
      ? "bg-green-50 text-green-800 border-green-200"
      : kind === "error"
      ? "bg-red-50 text-red-800 border-red-200"
      : "bg-blue-50 text-blue-800 border-blue-200";

  wrap.className += ` ${colorClasses}`;

  // icon
  const icon = document.createElement("div");
  icon.className = "flex-shrink-0 mt-[3px]";
  if (kind === "success") icon.innerHTML = "✅";
  else if (kind === "error") icon.innerHTML = "⛔";
  else icon.innerHTML = "ℹ️";

  const content = document.createElement("div");
  content.className = "flex-1";

  const p = document.createElement("div");
  p.innerText = message;

  content.appendChild(p);

  const closeBtn = document.createElement("button");
  closeBtn.className =
    "ml-3 text-xs opacity-70 hover:opacity-100 transition rounded p-1";
  closeBtn.textContent = "✕";
  closeBtn.onclick = () => {
    fadeOutAndRemove(wrap);
  };

  wrap.appendChild(icon);
  wrap.appendChild(content);
  wrap.appendChild(closeBtn);

  return wrap;
}

function fadeOutAndRemove(el: HTMLElement) {
  el.style.transition = "opacity 240ms ease, transform 240ms ease";
  el.style.opacity = "0";
  el.style.transform = "translateY(-6px)";
  setTimeout(() => {
    el.remove();
  }, 260);
}

function showToast(message: string, kind: ToastKind = "info", duration = DEFAULT_DURATION) {
  if (typeof document === "undefined") {
    // Server-side or test environment fallback
    // eslint-disable-next-line no-console
    console.log(`[toast:${kind}] ${message}`);
    return;
  }

  const container = ensureContainer();
  if (!container) return;

  const toastEl = createToastElement(message, kind);
  container.appendChild(toastEl);

  // Auto-dismiss
  const t = setTimeout(() => {
    if (toastEl.parentElement) fadeOutAndRemove(toastEl);
    clearTimeout(t);
  }, duration);
}

export const toast = {
  success: (msg: string, ms?: number) => showToast(msg, "success", ms),
  error: (msg: string, ms?: number) => showToast(msg, "error", ms),
  info: (msg: string, ms?: number) => showToast(msg, "info", ms),
};
