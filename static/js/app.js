// Build the metadata panel
//function buildMetadata(sample) {
  const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

  const dataPromise = d3.json(url);
  console.log("Data Promise", dataPromise);

  // Fetch the JSON data and console log it
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    console.log(data);
    });

    // get the metadata field
    

    // Filter the metadata for the object with the desired sample number
    function popular(id) {
      return topten.metadata === 1167
    }

    // Use d3 to select the panel with id of `#sample-metadata`
    //d3.selectAll("#selDataset").on("click", function() {

    // Use `.html("") to clear any existing metadata


    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.

  //});
  //}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field


    // Filter the samples for the object with the desired sample number


    // Get the otu_ids, otu_labels, and sample_values


    // Build a Bubble Chart


    // Render the Bubble Chart
    

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    let otu_ids = ['OTU 1167', 'OTU 2589', 'OTU 482']
    let sample_values = [162, 123, 115]

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    let trace2 = {
      //x: popularRomans.map(row => row.id),
      //y: popularRomans.map(row => row.romanSearchResults),
      x: otu_ids,
      y: sample_values,
      type: "bar"
    };

    let layout = {
      title: "Top 10 Bacteria Cultures Found"
    }

    // Render the Bar Chart
    Plotly.newPlot("plot", data, layout);
  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field


    // Use d3 to select the dropdown with id of `#selDataset`


    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.


    // Get the first sample from the list


    // Build charts and metadata panel with the first sample

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected

}

// Initialise the dashboard
init();
//   END OF STARTER CODE