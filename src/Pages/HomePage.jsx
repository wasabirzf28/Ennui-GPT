export default function HomePage({ onNavigate }) {
    return (
      <div className="min-h-screen bg-white text-gray-900 px-6">
        {/* SECTION HÉRO */}
        <section className="flex flex-col items-center justify-center text-center py-32 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Tu en as marre, Tu sais plus quoi faire ? <br />Nous aussi !
          </h1>
          <p className="text-xl text-gray-500 mb-10">
            Ce site ne sert à rien. Et c’est précisément pour ça que tu es là.
          </p>
  
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onNavigate('chat')}
              className="px-6 py-3 text-base font-medium bg-gray-900 text-white rounded-md hover:bg-gray-800 transition"
            >
              Parle à une IA plus vide que ton après-midi
            </button>
            <button
              onClick={() => alert("Tu as cliqué. Rien ne s’est passé. Bravo.")}
              className="px-6 py-3 text-base font-medium border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition"
            >
              Clique ici pour exister temporairement
            </button>
          </div>
        </section>
  
        {/* SECTION CONTENU IDÉES */}
        <section className="bg-gray-50 py-24 border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center mb-16">
              Que faire quand on a absolument rien à faire ?
            </h2>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
              {[
                {
                  emoji: '🛋️',
                  title: 'Analyser ton plafond',
                  desc: 'Fais un audit complet des fissures. Peut-être une constellation cachée.'
                },
                {
                  emoji: '🧦',
                  title: 'Associer des chaussettes orphelines',
                  desc: 'Mission impossible. Bonus : invente-leur une biographie.'
                },
                {
                  emoji: '📚',
                  title: 'Ouvrir un livre. Puis le refermer.',
                  desc: 'Juste pour te sentir cultivé·e pendant 7 secondes.'
                },
                {
                  emoji: '📺',
                  title: 'Lancer une série que tu ne finiras pas',
                  desc: 'Dis-toi que tu la regardes “en fond”. Personne ne juge.'
                },
                {
                  emoji: '📞',
                  title: 'Appeler un service client au hasard',
                  desc: 'Demande-leur leur plat préféré. Réalise ensuite ce que tu viens de faire.'
                },
                {
                  emoji: '🧠',
                  title: 'Compter tes pensées',
                  desc: 'Résultat moyen : 0,5 pensée par minute.'
                }
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="text-xl font-medium mb-2">
                    {item.emoji} {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* SECTION FAQ FAUSSE */}
        <section className="py-24 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Foire aux Questions (inutiles)</h2>
          <ul className="text-left space-y-6 text-gray-700">
            <li>
              <strong>Est-ce que ce site résout mon ennui ?</strong>
              <br />
              Non. Mais au moins il est bien designé.
            </li>
            <li>
              <strong>Y a-t-il un but caché ici ?</strong>
              <br />
              Oui. Faire perdre 3 à 5 minutes à chaque visiteur.
            </li>
            <li>
              <strong>Qui a créé ce site ?</strong>
              <br />
              Quelqu’un qui s’ennuyait. Tu vois le pattern ?
            </li>
          </ul>
        </section>
  
        {/* FOOTER */}
        <footer className="text-center text-sm text-gray-400 py-10 border-t border-gray-100">
          © 2025 EnnuiCorp. Le néant, mais avec une jolie typographie.
        </footer>
      </div>
    );
  }
  