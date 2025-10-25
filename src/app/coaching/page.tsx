import { CoachingCard } from '@/components/CoachingCard';

export default function CoachingPage() {
  const services = [
    {
      title: 'エグゼクティブ・リーダーシップコーチング',
      description:
        '経営幹部やシニアリーダー向けの1対1コーチング。戦略的思考、意思決定、リーダーシップのプレゼンスに焦点を当てます。',
      price: 45000,
      duration: '90分',
      image: '',
    },
    {
      title: 'キャリア転換コーチング',
      description:
        '自信を持ってキャリアチェンジをナビゲート。新しい役職や業界への移行を検討しているエグゼクティブに最適です。',
      price: 30000,
      duration: '60分',
      image: '',
    },
    {
      title: 'チームパフォーマンスコーチング',
      description:
        '結束力のある高パフォーマンスチームを構築。チーム評価と実行可能な戦略が含まれます。',
      price: 75000,
      duration: '2時間',
      image: '',
    },
    {
      title: '戦略プランニングセッション',
      description:
        '明確な戦略ビジョンと組織のための実行可能なロードマップを開発します。',
      price: 60000,
      duration: '2時間',
      image: '',
    },
    {
      title: 'コミュニケーションマスタリー',
      description:
        'プレゼンテーションから困難な会話まで、エグゼクティブのコミュニケーションスキルを向上させます。',
      price: 38000,
      duration: '75分',
      image: '',
    },
    {
      title: 'ワークライフ統合コーチング',
      description:
        '仕事の目標と個人の価値観を一致させることで、持続可能な成功を実現します。',
      price: 30000,
      duration: '60分',
      image: '',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-primary mb-4">
          コーチングサービス
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          あなたのリーダーシップの可能性を引き出し、測定可能な成果を生み出すために
          設計されたパーソナライズされたコーチングプログラム
        </p>
      </section>

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <CoachingCard key={index} {...service} />
          ))}
        </div>
      </section>

      <section className="bg-brand-primary text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">今すぐ始めませんか？</h2>
        <p className="text-lg mb-6">
          今日最初のセッションを予約して、あなたの変革の旅を始めましょう
        </p>
        <a
          href="/booking"
          className="inline-block bg-brand-accent px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          今すぐ予約
        </a>
      </section>
    </div>
  );
}
