var data = new Array();
var firstNames = ['Sam', 'Roberts', 'Willam', 'David', 'Ocula'];
var lastNames = ['Billings', 'Lafoe', 'Dortmund', 'Guetta', 'Lang'];
var ages = ['23', '34', '37', '45', '50'];
var joiningDates = [
  '2012-11-23',
  '2014-12-34',
  '2015-04-13',
  '2017-06-08',
  '2010-02-23',
];
var countries = ['Germany', 'UK', 'India', 'USA', 'Japan'];

var k = 0;
for (var i = 0; i < firstNames.length; i++) {
  var row = {};
  row['firstName'] = firstNames[k];
  row['lastName'] = lastNames[k];
  row['age'] = ages[k];
  row['joiningDate'] = joiningDates[k];
  row['country'] = countries[k];

  data[i] = row;
  k++;
}

var source = {
  localdata: data,
  datatype: 'array',
};

var dataAdapter = new $.jqx.dataAdapter(source, {
  loadComplete: function (data) {},
  loadError: function (xhr, status, error) {},
});

$('#details').jqxGrid({
  theme: 'dark',
  width: '100%',
  source: dataAdapter,
  autoheight: true,
  sortable: true,
  filterable: true,
  columnsresize: true,
  columns: [
    {
      text: 'First Name',
      datafield: 'firstName',
      width: 200,
    },
    {
      text: 'Last Name',
      datafield: 'lastName',
      width: 200,
    },
    {
      text: 'Age',
      datafield: 'age',
      width: 200,
    },
    {
      text: 'Joining Date',
      datafield: 'joiningDate',
      width: 200,
    },
    {
      text: 'Country',
      datafield: 'country',
      width: 200,
    },
  ],
});
