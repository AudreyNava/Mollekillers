/*
Materiales(Clave, Descripción, precio, impuesto)
Proveedores(RFC, RazonSocial)
Proyectos(Numero, Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad)
*/ 

/*
La suma de las cantidades e importe total de todas las entregas realizadas durante el 97
CALL ConsultaCatidadesXYear('1997/01/01', '1997/12/31')
*/

SELECT SUM(Cantidad) as 'Total de unidades', SUM(precio+impuesto) as 'Total Ingresos'
FROM materiales m, entregan e
WHERE m.clave = e.clave
and fecha BETWEEN '1997/01/01' AND '1997/12/31'

/* 
Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas.
*/ 

SELECT RazonSocial, COUNT(Numero) as 'Total entregas', SUM(precio + impuesto) as 'Importe total'
FROM materiales m, entregan e, proveedores pr
WHERE e.clave = m.clave	AND PR.rfc = E.rfc
GROUP BY RazonSocial

/*
Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada, la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400.
*/
SELECT M.clave, Descripcion, SUM(cantidad) as 'Total unidades', MIN(cantidad), 
MAX(cantidad), SUM(cantidad * (precio + impuesto)) as 'Importe'
FROM materiales m, entregan e
WHERE e.clave = m.clave	
GROUP BY M.clave, Descripcion
HAVING AVG(cantidad) > 400

/*
Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, detallando la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.
*/
SELECT RazonSocial, AVG(Cantidad) as 'Promedio de catidades entregadas', e.clave, descripcion
FROM materiales m, entregan e, proveedores pr
WHERE e.clave = m.clave	and PR.rfc = E.rfc
GROUP BY RazonSocial
HAVING AVG(cantidad) < 500