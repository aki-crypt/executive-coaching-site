import { BookingForm } from '@/components/BookingForm';

export default function BookingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-primary mb-4">
          コーチングセッションを予約する
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          リーダーシップを変革する第一歩を踏み出しましょう。下記のフォームにご記入いただければ、
          24時間以内にご連絡いたします。
        </p>
      </section>

      <BookingForm />

      <section className="mt-12 bg-blue-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-brand-primary mb-3">
          次のステップ
        </h2>
        <ol className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="font-semibold mr-2">1.</span>
            <span>ご予約を確認し、空き状況をお知らせします</span>
          </li>
          <li className="flex items-start">
            <span className="font-semibold mr-2">2.</span>
            <span>セッションの詳細を記載した確認メールをお送りします</span>
          </li>
          <li className="flex items-start">
            <span className="font-semibold mr-2">3.</span>
            <span>事前アンケートをお送りします</span>
          </li>
          <li className="flex items-start">
            <span className="font-semibold mr-2">4.</span>
            <span>コーチングの旅が始まります！</span>
          </li>
        </ol>
      </section>
    </div>
  );
}
