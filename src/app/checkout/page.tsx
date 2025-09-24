"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { useStore } from "@/context/store";

const steps = ["配送信息", "支付方式", "确认订单"];

type AddressForm = {
  label: string;
  recipient: string;
  line1: string;
  line2: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
  isDefault: boolean;
};

const initialAddressForm: AddressForm = {
  label: "新地址",
  recipient: "",
  line1: "",
  line2: "",
  city: "",
  postalCode: "",
  country: "瑞士",
  phone: "",
  isDefault: false,
};

export default function CheckoutPage() {
  const router = useRouter();
  const {
    bagItems,
    bagSubtotal,
    giftCard,
    addresses,
    paymentMethods,
    defaultAddressId,
    defaultPaymentMethodId,
    addAddress,
    setDefaultAddress,
    placeOrder,
  } = useStore();
  const [step, setStep] = useState(0);
  const [shippingSpeed, setShippingSpeed] = useState("特快配送");
  const [addressId, setAddressId] = useState(defaultAddressId ?? addresses[0]?.id ?? "");
  const [paymentId, setPaymentId] = useState(defaultPaymentMethodId ?? paymentMethods[0]?.id ?? "");
  const [addressForm, setAddressForm] = useState<AddressForm>(initialAddressForm);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<{ orderId: string } | null>(null);

  const total = useMemo(() => Math.max(bagSubtotal - (giftCard?.amount ?? 0), 0), [bagSubtotal, giftCard?.amount]);

  const selectedAddress = useMemo(() => addresses.find((address) => address.id === addressId), [addresses, addressId]);
  const selectedPayment = useMemo(
    () => paymentMethods.find((payment) => payment.id === paymentId),
    [paymentMethods, paymentId]
  );

  const handleAddAddress = () => {
    if (!addressForm.recipient || !addressForm.line1 || !addressForm.city || !addressForm.postalCode) {
      setMessage("请填写完整的地址信息");
      return;
    }
    const result = addAddress(addressForm);
    setAddressId(result.id);
    setShowAddressForm(false);
    setAddressForm(initialAddressForm);
    setMessage(result.message);
  };

  const handlePlaceOrder = () => {
    if (!addressId || !paymentId) {
      setMessage("请选择配送地址与支付方式");
      return;
    }
    const result = placeOrder({ addressId, paymentMethodId: paymentId, shippingSpeed });
    setMessage(result.message);
    if (result.success && result.orderId) {
      setConfirmation({ orderId: result.orderId });
      setTimeout(() => {
        router.push("/account");
      }, 1200);
    }
  };

  return (
    <div className="space-y-8 pb-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">结账</p>
        <h1 className="text-2xl font-semibold text-slate-900">完成订单</h1>
        <p className="text-sm text-slate-500">Stripe 提供安全支付，配送全程实现碳中和。</p>
      </header>

      <section className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
        <ol className="flex justify-between text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          {steps.map((label, index) => (
            <li key={label} className={index === step ? "text-slate-900" : ""}>
              <div className="flex flex-col items-center gap-2">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm ${
                    index === step ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white text-slate-500"
                  }`}
                >
                  {index + 1}
                </span>
                {label}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {confirmation ? (
        <section className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-6 text-center shadow-sm">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500 text-4xl text-white">
            ✓
          </div>
          <h2 className="text-xl font-semibold text-slate-900">订单已确认</h2>
          <p className="text-sm text-slate-500">我们正在为你备货，订单编号 {confirmation.orderId}。</p>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">即将跳转至账户页面…</p>
        </section>
      ) : bagItems.length === 0 ? (
        <section className="rounded-3xl border border-dashed border-slate-200 bg-white/80 p-6 text-center text-sm text-slate-500">
          购物袋为空，请返回商城添加商品后再试。
        </section>
      ) : (
        <>
          {step === 0 ? (
            <section className="space-y-5 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
              <div className="space-y-3">
                <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">配送地址</h2>
                <div className="space-y-3">
                  {addresses.map((address) => (
                    <label
                      key={address.id}
                      className={`flex cursor-pointer items-start justify-between gap-4 rounded-2xl border px-4 py-3 text-sm transition ${
                        addressId === address.id
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      <span>
                        <span className="font-semibold">{address.recipient}</span>
                        <span className="mt-1 block text-xs text-inherit">
                          {address.line1}
                          {address.line2 ? `, ${address.line2}` : ""}, {address.postalCode} {address.city}
                        </span>
                        <span className="mt-1 block text-xs text-inherit">{address.country}</span>
                        <span className="mt-1 block text-xs text-inherit">{address.phone}</span>
                      </span>
                      <input
                        type="radio"
                        name="address"
                        checked={addressId === address.id}
                        onChange={() => setAddressId(address.id)}
                        className="mt-1"
                      />
                    </label>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  <button type="button" onClick={() => setShowAddressForm((value) => !value)} className="text-slate-500 hover:text-slate-900">
                    {showAddressForm ? "取消" : "新增地址"}
                  </button>
                  {addressId ? (
                    <button type="button" onClick={() => setDefaultAddress(addressId)} className="text-slate-500 hover:text-slate-900">
                      设为默认
                    </button>
                  ) : null}
                </div>
                {showAddressForm ? (
                  <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="grid gap-3 text-sm">
                      <input
                        className="rounded-full border border-slate-200 bg-white px-4 py-2"
                        placeholder="收件人"
                        value={addressForm.recipient}
                        onChange={(event) => setAddressForm((prev) => ({ ...prev, recipient: event.target.value }))}
                      />
                      <input
                        className="rounded-full border border-slate-200 bg-white px-4 py-2"
                        placeholder="街道地址"
                        value={addressForm.line1}
                        onChange={(event) => setAddressForm((prev) => ({ ...prev, line1: event.target.value }))}
                      />
                      <input
                        className="rounded-full border border-slate-200 bg-white px-4 py-2"
                        placeholder="门牌、楼层（选填）"
                        value={addressForm.line2}
                        onChange={(event) => setAddressForm((prev) => ({ ...prev, line2: event.target.value }))}
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          className="rounded-full border border-slate-200 bg-white px-4 py-2"
                          placeholder="城市"
                          value={addressForm.city}
                          onChange={(event) => setAddressForm((prev) => ({ ...prev, city: event.target.value }))}
                        />
                        <input
                          className="rounded-full border border-slate-200 bg-white px-4 py-2"
                          placeholder="邮政编码"
                          value={addressForm.postalCode}
                          onChange={(event) => setAddressForm((prev) => ({ ...prev, postalCode: event.target.value }))}
                        />
                      </div>
                      <input
                        className="rounded-full border border-slate-200 bg-white px-4 py-2"
                        placeholder="国家"
                        value={addressForm.country}
                        onChange={(event) => setAddressForm((prev) => ({ ...prev, country: event.target.value }))}
                      />
                      <input
                        className="rounded-full border border-slate-200 bg-white px-4 py-2"
                        placeholder="联系电话"
                        value={addressForm.phone}
                        onChange={(event) => setAddressForm((prev) => ({ ...prev, phone: event.target.value }))}
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={addressForm.isDefault}
                          onChange={(event) =>
                            setAddressForm((prev) => ({ ...prev, isDefault: event.target.checked }))
                          }
                        />
                        设为默认地址
                      </label>
                      <Button size="sm" onClick={handleAddAddress}>
                        保存
                      </Button>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="space-y-3">
                <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">配送速度</h2>
                <div className="space-y-3">
                  {[
                    { id: "特快配送", label: "特快配送", detail: "1-2 个工作日送达", price: "免费" },
                    { id: "标准配送", label: "标准配送", detail: "3-5 个工作日送达", price: "免费" },
                  ].map((option) => (
                    <label
                      key={option.id}
                      className={`flex cursor-pointer items-center justify-between gap-4 rounded-2xl border px-4 py-3 text-sm transition ${
                        shippingSpeed === option.id
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      <span>
                        <span className="font-semibold">{option.label}</span>
                        <span className="block text-xs text-inherit">{option.detail}</span>
                      </span>
                      <span className="text-xs uppercase tracking-[0.3em] text-inherit">{option.price}</span>
                      <input
                        type="radio"
                        name="shipping"
                        checked={shippingSpeed === option.id}
                        onChange={() => setShippingSpeed(option.id)}
                        className="hidden"
                      />
                    </label>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {step === 1 ? (
            <section className="space-y-5 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
              <div className="space-y-3">
                <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">支付方式</h2>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex cursor-pointer items-center justify-between gap-4 rounded-2xl border px-4 py-3 text-sm transition ${
                        paymentId === method.id
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      <span>
                        <span className="font-semibold">{method.label}</span>
                        <span className="block text-xs text-inherit">{method.detail}</span>
                      </span>
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentId === method.id}
                        onChange={() => setPaymentId(method.id)}
                      />
                    </label>
                  ))}
                </div>
                <div className="rounded-2xl bg-slate-100 p-4 text-xs text-slate-500">
                  所有支付均由 Stripe 安全处理，兼容设备可使用苹果支付与 Google Pay。
                </div>
              </div>
            </section>
          ) : null}

          {step === 2 ? (
            <section className="space-y-5 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
              <div className="space-y-3">
                <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">确认订单</h2>
                <div className="space-y-3 text-sm text-slate-600">
                  {bagItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between rounded-2xl bg-white p-3 shadow-sm">
                      <div>
                        <p className="font-semibold text-slate-900">{item.product.name}</p>
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.color} · 尺码 {item.size}</p>
                      </div>
                      <p className="font-semibold text-slate-900">CHF {(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                  <div className="rounded-2xl bg-slate-100 p-3 text-xs text-slate-500">
                    配送方式：{shippingSpeed}，送往 {selectedAddress?.city}。
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center justify-between">
                  <span>商品小计</span>
                  <span>CHF {bagSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>配送</span>
                  <span className="text-emerald-600">免费</span>
                </div>
                {giftCard ? (
                  <div className="flex items-center justify-between text-emerald-600">
                    <span>礼品卡 ({giftCard.code})</span>
                    <span>- CHF {giftCard.amount.toFixed(2)}</span>
                  </div>
                ) : null}
                <div className="flex items-center justify-between text-base font-semibold text-slate-900">
                  <span>应付金额</span>
                  <span>CHF {total.toFixed(2)}</span>
                </div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">配送信息</p>
                {selectedAddress ? (
                  <p className="mt-2 text-sm text-slate-600">
                    {selectedAddress.recipient}, {selectedAddress.line1}
                    {selectedAddress.line2 ? `, ${selectedAddress.line2}` : ""}, {selectedAddress.postalCode} {selectedAddress.city}
                  </p>
                ) : null}
                {selectedPayment ? (
                  <p className="mt-3 text-sm text-slate-600">支付方式：{selectedPayment.label}</p>
                ) : null}
              </div>
              <Button className="w-full" onClick={handlePlaceOrder}>
                提交订单
              </Button>
            </section>
          ) : null}

          <div className="flex justify-between">
            <Button
              variant="ghost"
              disabled={step === 0}
              onClick={() => {
                setMessage(null);
                setStep((value) => Math.max(0, value - 1));
              }}
            >
              上一步
            </Button>
            <Button
              onClick={() => {
                setMessage(null);
                setStep((value) => Math.min(steps.length - 1, value + 1));
              }}
              disabled={step === steps.length - 1}
            >
              下一步
            </Button>
          </div>
        </>
      )}

      {message ? (
        <p className="text-center text-xs uppercase tracking-[0.3em] text-slate-500">{message}</p>
      ) : null}
    </div>
  );
}
