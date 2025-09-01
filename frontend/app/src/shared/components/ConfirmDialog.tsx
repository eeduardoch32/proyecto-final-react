
import { toast } from "react-toastify";




type ConfirmDialogProps = {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel?: () => void; // <-- nuevo
};

export function confirmDialog({
  title,
  message,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {

    // cerrar cualquier confirmación abierta antes de abrir otra
  toast.dismiss();

  toast(
    ({ closeToast }) => (
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm">{message}</p>

        <div className="flex justify-end gap-2 mt-2">
          <button
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
           onClick={() => {
              onCancel?.();     // <-- disparo callback opcional
              closeToast?.();
            }}
          >
            {cancelText}
          </button>
          <button
            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            onClick={() => {
              onConfirm();
              closeToast?.();
            }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    ),
    {
      autoClose: false,
      closeOnClick: false,
      draggable: false,
      position: "top-center",
    }
  );
}
