Package.describe({
  name: 'ryanswapp:spectrum-colorpicker',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A meteor wrapper for the spectrum colorpicker',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('jquery@1.11.3_2', 'client');
  api.addFiles('spectrum-colorpicker.css', 'client');
  api.addFiles('spectrum-colorpicker.js', 'client');
});
