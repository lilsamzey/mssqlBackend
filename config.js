// const sql = require("mssql/msnodesqlv8");
 const { Connection } = require("tedious");

// const config =  sql.connect( {server: "edno.database.windows.net",
// database: "EdnoSchoolManagementSystem",
// driver: "msnodesqlv8",
// user:"systemadmin",
// password:"Klmn-32553255",
// options: {
//     trustedConnection: true
// }
// })




// const sql = require("mssql/msnodesqlv8");

// async function connectToDatabase() {
//   try {
//     const pool = await sql.connect({
//       server: "edno.database.windows.net",
//       database: "EdnoSchoolManagementSystem",
//       user: "systemadmin", 
//       password: "Klmn-32553255", 
//       options: {
//         encrypt: true,
//       },
//     });

    
//     console.log("Connected to the database successfully!");


//   } catch (err) {
//     console.error("Error connecting to the database:", err.message);
//   }
// }

// // Call the function to connect to the database
// connectToDatabase();




// const sql = require("mssql/msnodesqlv8");

// async function connectToDatabase() {
//   try {
//     const pool = await sql.connect({
//       server: "coursemanagementsystem.cfgtwzvplpnc.eu-north-1.rds.amazonaws.com",
//       port: 1433,
//       database: "EdnoSchoolManagementSystem",
//       user: "admin", 
//       password: "Klmn-32553255", 
//       options: {
//         // encrypt: true,
//         // trustServerCertificate: true,
//       },
//     });

    
//     console.log("Connected to the database successfully!");


//   } catch (err) {
//     console.error("Error connecting to the database:", err.message);
//   }
// }

// // Call the function to connect to the database
// connectToDatabase();










const sql = require('mssql');

async function connectToDatabase() {
  try {
    const config = {
     server: '34.70.34.112',
     port: 1433,
      user: 'sqlserver',
  password: 'Klmn-32553255',
  database: 'zolinex',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  }
    };

    await sql.connect(config);

    console.log('Connected to the database successfully!');

    // Bağlantıyı kapatmak için gerekirse kullanabilirsiniz
    // sql.close();
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
  }
}

// Fonksiyonu çağırarak veritabanına bağlanın
connectToDatabase();
