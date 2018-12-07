Package.describe({
  name: 'neobii:vulcan-draft-mui',
});

Package.onUse(function (api) {

  api.use([

    // vulcan core
    'vulcan:core@1.12.9',

    // vulcan packages
    'vulcan:forms@1.12.9',
    
    //draft core
    'neobii:vulcan-draft-core'    
  ]);
  
  api.mainModule('lib/DraftFieldLayout.jsx', 'server');
  api.mainModule('lib/DraftFieldLayout.jsx', 'client');

});
