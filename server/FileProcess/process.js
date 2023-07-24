const fs = require('fs');
const path = require('path')
const Data = require('../modals/data'); // Import the created schema


// Function to read .docx file and convert content to JSON

  
const insertData = async () => {
    try {
 
      const jsonFormat = await JSON.parse(fs.readFileSync(path.join(__dirname, './data.json'), 'utf8'));
 
      // await Data.deleteMany({}); // Clear the collection
      console.log(jsonFormat.length)
      console.log(typeof (jsonFormat))
      // Insert new data
      
      await Data.insertMany(jsonFormat)
      console.log(jsonFormat)
      console.log('Data insertion complete.');
    } catch (error) {
      console.error('Error saving data to MongoDB:', error);
    }
  };
 

module.exports = {
    insertData,
}
