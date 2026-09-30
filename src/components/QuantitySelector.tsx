import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

const QuantitySelector = ({
  quantity,
  onDecrease,
  onIncrease,
}: QuantitySelectorProps) => {
  return (
    <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 p-1">
      <button
        type="button"
        onClick={onDecrease}
        aria-label="Diminuer la quantité"
        className="flex h-8 w-8 items-center justify-center rounded-full text-gray-700 transition hover:bg-black hover:text-white"
      >
        <Minus size={15} />
      </button>

      <span className="min-w-9 text-center text-sm font-bold text-black">
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        aria-label="Augmenter la quantité"
        className="flex h-8 w-8 items-center justify-center rounded-full text-gray-700 transition hover:bg-orange-500 hover:text-white"
      >
        <Plus size={15} />
      </button>
    </div>
  );
};

export default QuantitySelector;