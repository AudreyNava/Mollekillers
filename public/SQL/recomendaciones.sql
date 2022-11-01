-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-11-2022 a las 05:41:47
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `recomendaciones`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recomendacion`
--

CREATE TABLE `recomendacion` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `descripcion` text NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `recomendacion`
--

INSERT INTO `recomendacion` (`id`, `nombre`, `descripcion`, `img`) VALUES
(2, 'StarWars', 'Una franquicia y universo compartido de fantasía compuesta primordialmente de una serie de películas concebidas por el cineasta estadounidense George Lucas', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/375px-Star_Wars_Logo.svg.png'),
(3, 'Zurg', 'Tiene como objetivo destruir a Buzz Lightyear y dominar el universo.', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFBcVFRQYGBcaGxsbGxgXGhsbFxwYGxsaGBgaGhsbICwkGx0pIBobJTYlKS4wMzMzGiI5PjkyPSwyMzABCwsLEA4QHRISHjMpISkyMjIyMjAyMjIyMjIyMjIyMjIzMDI1NDAyMDQzMjIyMjIyMjMyMjQyMjIyNDIyMjIyMv/AABEIARwAsQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcCAQj/xABHEAACAAMEBgcECAUCBAcAAAABAgADEQQSITEFBkFRYYETIjJxkaGxB0JSwSNicoKSstHwFDOiwuFjcyRDU9IWNIOjs+Lx/8QAGQEAAgMBAAAAAAAAAAAAAAAAAAIBAwQF/8QALhEAAgEDBAECBAUFAAAAAAAAAAECAwQREiExQVETIgVhcYEUQpGx8DJSocHR/9oADAMBAAIRAxEAPwDZoIIIACCCCACj6Y1wmyLQ0kyQKHqXyQXXDrKcmHdWmRxjuy6+ITSbJdeKkMO+hofWLNpHR0qfLMuagdDsOYOwqRirDYRQiM903q3MsxwJeQcBMPbQnAK+ym58thocTRUU47xZ0bd280oVFh+Uy/6N0vInisqYrbxWjDvU4jwiQEYpMltLYEEgg1DAkEHeCMRFm0Rr4ZVEtXWXAdIo6w4sozHEY8DCwuE3iWw9x8MlBaqbyvHZoFpnqilmNAPHuHGGWibe86+xUKoIC514137PGIDTWkVmsLjhpYUFSpqrXhUtUZ7uRh3orTKS5dxgRSpFPerjTgcc8o1JZ4OZh8FlZqQhZrbLmVuOrUzof3hxinaS0002oJonwjLnvhhKtV1gyMVYZERojbNrfkdU9jRZpIUlRU0NBWlTsFdkR+i9LLNqpFxxmp4Z07t0R9h1lUrSYKMMioqG/wC09+HpELOtlZhmKLpLXhTYfn/mKJQcXhiNNcl9iN0npmRIH0kwA7FGL'),
(4, 'Memonster', 'Es un robot softboy', 'https://m.media-amazon.com/images/I/61EnLSflMDL._AC_SY780_.jpg'),
(5, 'monsters ing', 'Monsters, Incorporated es la fábrica de sustos más grande en el mundo de los monstruos y James P. Sullivan es uno de sus mejores asustadores. ', 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/BCWNAG4MNRBSLHAM7COBNDWIJM.jpg'),
(7, 'Diccionario Jazaro', 'Diccionario jázaro​ es la primera novela publicada por el escritor serbio Milorad Pavić en 1984.', 'http://3.bp.blogspot.com/_Gp7jANF-D6g/SxSIOScv7pI/AAAAAAAAAdk/7xCurp2MdOU/s1600/diccionariojazaro.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `recomendacion`
--
ALTER TABLE `recomendacion`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `recomendacion`
--
ALTER TABLE `recomendacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
