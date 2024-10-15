import chalk from 'chalk';
import "dotenv/config"; 
console.log(chalk.blueBright(`${process.env.MY_NAME1}`) + chalk.red(`and ${process.env.MY_NAME2}`) + chalk.greenBright(`${process.env.MY_NAME3}`)+ chalk.yellowBright(`${process.env.MY_NAME4}`))
