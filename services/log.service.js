import chalk from 'chalk'
import dedent from 'dedent-js'

export const printError = (error) => {
    console.log(chalk.bgRed('Error') + ' ' + error)
}

export const printSuccess = (message) => {
    console.log(chalk.bgGreen('Success') + ' ' + message)
}
export const printWeather = (weather) => {
    console.log(dedent(
        `${chalk.bgYellow('WEATHER ')}
        Погода в городе ${weather.name}
        ${weather.weather[0].description}
        Температура ${weather.main.temp} (ощущается как ${weather.main.feels_like}
    `))
}

export const printHelp = () => {
    console.log(dedent(
         `${chalk.bgCyan('HELP ')}
        Без параметров - вывод погоды
        -s [CITY] для установки города
        -h для вывода помощи
        -t [API_KEY] для сохранения токена
    `))
}