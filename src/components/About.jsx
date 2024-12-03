
const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center text-mainTextColor">
    
      <main className="px-6 py-10 text-center max-w-3xl">
        <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
        
        <section className="mb-8">
          <p className="text-lg mb-4">
            Real Madrid Club de Fútbol, known worldwide as Real Madrid, is a professional football club based in Madrid, Spain. 
            Established on March 6, 1902, Real Madrid is celebrated for its success, rich history, and unparalleled fan support.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Our History</h3>
          <p className="text-gray-600">
            As one of the most successful clubs in football history, Real Madrid has claimed numerous titles, including a record-breaking 
            14 UEFA Champions League titles and 35 La Liga championships. Known for producing legends and shaping the game, Real Madrid remains 
            a global football icon.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
          <p className="text-gray-600">
            Real Madrid stands for excellence, dedication, and loyalty. We are committed to inspiring millions of fans across the world 
            and upholding the legacy of our club.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">Achievements</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>14 UEFA Champions League titles</li>
            <li>35 La Liga titles</li>
            <li>Numerous domestic and international trophies</li>
          </ul>
        </section>
      </main>

      <footer className="bg-white w-full py-4 text-center text-gray-600">
        &copy; 2024 Real Madrid. All Rights Reserved.
      </footer>
    </div>
  )
}

export default About
