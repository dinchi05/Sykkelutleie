fetch('sykkelturer.csv')
  .then(response => response.text())
  .then(data => {
    const parsedData = Papa.parse(data, { header: true }).data;
    console.log(parsedData); // displays the parsed data in the console
  });

  