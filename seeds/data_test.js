
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('CLIENTS').del()
    .then(function () {
      // Inserts seed entries
      return knex('CLIENTS').insert([
        { NAME: 'José', ACTIVE: true,  API_KEY: 'FA2536ADF67348FE'},
        { NAME: 'Maria', ACTIVE: true,  API_KEY: 'FA25DF5368ACC8FE'},
        { NAME: 'João', ACTIVE: false, API_KEY: 'FA683827EDA54FF'},
        { NAME: 'Pedro', ACTIVE: true,  API_KEY: 'EA6763726DAC675'},
        { NAME: 'Gisele', ACTIVE: true,  API_KEY: '65CAD763276FDAC'},
        { NAME: 'Gerson', ACTIVE: true,  API_KEY: '6767EFACD5DE432'},
        { NAME: 'Madalena', ACTIVE: false, API_KEY: 'DAC54376DF76D7A8'},
        { NAME: 'Lucas', ACTIVE: false, API_KEY: '7DAFEC56567EDA'},
        { NAME: 'Antônio', ACTIVE: false, API_KEY: 'BA558BADEF97'},
        { NAME: 'Laura', ACTIVE: true,  API_KEY: '98DBAE76E7A89D'},
      ]);
    });
};
