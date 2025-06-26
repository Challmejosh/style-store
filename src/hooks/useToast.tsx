import React, { useState, useCallback, useRef } from "react";

interface ToastOptions {
  message: string;
  showConfirm?: boolean;
  onConfirm?: () => void;
}

export function useToast() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<ToastOptions>({ message: "" });
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const showToast = useCallback((opts: ToastOptions) => {
    setOptions(opts);
    setOpen(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    if (!opts.showConfirm) {
      timerRef.current = setTimeout(() => setOpen(false), 3000);
    }
  }, []);

  const closeToast = useCallback(() => {
    setOpen(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const Toast = open ? (
    <div
      style={{
        position: "fixed",
        top: 24,
        left: "50%",
        transform: "translateX(-50%)",
        background: "#fff",
        boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
        borderRadius: 8,
        padding: "16px 24px",
        zIndex: 9999,
        minWidth: 240,
        display: "flex",
        alignItems: "center",
        gap: 12,
        transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
      }}
    >
      <span style={{ flex: 1 }}>{options.message}</span>
      {options.showConfirm && (
        <button
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            padding: "6px 16px",
            cursor: "pointer",
            fontWeight: 500,
          }}
          onClick={() => {
            options.onConfirm?.();
            closeToast();
          }}
        >
          Confirm
        </button>
      )}
      <button
        style={{
          background: "transparent",
          border: "none",
          fontSize: 18,
          marginLeft: 8,
          cursor: "pointer",
        }}
        onClick={closeToast}
        aria-label="Close"
      >
        ×
      </button>
    </div>
  ) : null;

  return { showToast, Toast };
}
