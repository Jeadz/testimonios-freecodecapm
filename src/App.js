import './App.css';
import Testimonio from './components/Testimonio';

function App()  {

  const testimonioShawn = <p>"Da miedo cambiar de carrera. Solo gané confianza en que podía codificar trabajando durante los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tuve un trabajo de seis cifras como ingeniero de software. <strong>freeCodeCamp cambió mi vida."</strong>"</p>

  const testimonioEmma = <p>"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de <strong>freeCodeCamp fue el que se atascó</strong>. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."</p>

  const testimonioSarah= <p>"<strong>freeCodeCamp fue la puerta de entrada a mi carrera</strong> como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollo en una empresa increíble."</p>
  return (
    <div className="App">
      <div  className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros estudiantes</h1>
        <Testimonio 
        nombre='Shawn Wang'
        pais='Singapur'
        imagen='ShawnWang'
        photo_alt= 'Shawn Wang photo'
        cargo='Ingeniero de Software'
        empresa='Amazon'
        testimonio={testimonioShawn}
        />
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='EmmaBostian'
          photo_alt='Emma Bostian photo'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio= {testimonioEmma}
          />
        <Testimonio 
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='SarahChima'
          photo_alt='Sarah Chima photo'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio={testimonioSarah}
          />
      </div>
    </div>
  );
}

export default App;
