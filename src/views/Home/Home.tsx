import photo from '../../assets/photo_Bilyana.jpg';
function Home() {
  return (
    <div className="flex flex-row justify-between p-10 gap-6">
      <div className="flex flex-col items-start gap-3 h-full">
        <h1 className="text-4xl text-left font-bold">Hi, I'm Bilyana Karcheva 👋</h1>
        <h2 className="text-3xl text-left text-accent font-bold">Junior Software Developer</h2>
        <p className="text-2xl text-left mt-4">I am a passionate software developer who recently graduated from the Alpha JavaScript program in Telerik Academy, eager to dive into real-world programming challenges. With a solid foundation in modern web technologies and a keen eye for detail, I'm excited to turn ideas into impactful digital experiences.</p>
      </div>
      <img className="w-64 rounded-lg " src={photo} alt="photo">
      </img>
    </div>
  );
}

export default Home;