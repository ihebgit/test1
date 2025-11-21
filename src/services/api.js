const API_KEY = "96cb0c26b7b823e0ab8be44d133eecc4";
export const getWeather = async (ville) => {
try {
const response = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&lang=fr&appid=${API_KEY}
`
);
if (!response.ok) throw new Error("Ville non trouvée");
console.log(response)
return await response.json();

} catch (error) {
throw error;
}
};