import { CoachingCard } from '@/components/CoachingCard';

export default function Home() {
  const coachingServices = [
    {
      title: 'エグゼクティブ・リーダーシップコーチング',
      description: 'リーダーシップスタイルを変革し、組織の成功を推進します',
      price: 45000,
      duration: '90分',
    },
    {
      title: 'キャリア転換コーチング',
      description: '自信と明確さを持って次のキャリアステップへ進みます',
      price: 30000,
      duration: '60分',
    },
    {
      title: 'チームパフォーマンスコーチング',
      description: '高パフォーマンスなチームを構築し、コラボレーションを強化します',
      price: 75000,
      duration: '2時間',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-brand-primary mb-4">
          あなたのリーダーシップを変革する
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          今日のリーダーのために設計された、パーソナライズされたエグゼクティブコーチングで
          あなたの可能性を最大限に引き出します
        </p>
        <a
          href="/booking"
          className="inline-block mt-8 bg-brand-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          セッションを予約する
        </a>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
          コーチングサービス
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coachingServices.map((service, index) => (
            <CoachingCard key={index} {...service} />
          ))}
        </div>
      </section>

      <section className="mt-16 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-brand-primary mb-4">
          私たちのコーチングを選ぶ理由
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">実証された成果</h3>
            <p className="text-gray-600">
              私たちのコーチング手法は、数百人のエグゼクティブが目標達成するのを支援してきました
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">パーソナライズされたアプローチ</h3>
            <p className="text-gray-600">
              すべてのコーチングセッションは、あなた独自の課題と目標に合わせてカスタマイズされます
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">柔軟なスケジュール</h3>
            <p className="text-gray-600">
              忙しいエグゼクティブのスケジュールに合わせてセッションを予約できます
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">機密性と安全性</h3>
            <p className="text-gray-600">
              すべてのセッションは、安全で機密性の高い環境で実施されます
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
