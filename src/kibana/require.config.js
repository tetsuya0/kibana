require.config({
  baseUrl: './',
  paths: {
    kibana: 'index',
    // special utils
    routes: 'utils/routes/index',
    errors: 'components/errors',
    modules: 'utils/modules',
    lodash: 'utils/_mixins',

    // bower_components
    'angular-bindonce': 'bower_components/angular-bindonce/bindonce',
    'angular-bootstrap': 'bower_components/angular-bootstrap/ui-bootstrap-tpls',
    'ngAnimate': 'bower_components/angular-animate/angular-animate',
    'ngAria': 'vendor/angular-aria/angular-aria',
    'ngMaterial': 'bower_components/angular-material/angular-material',
    'ngMaterialTable': 'bower_components/angular-material-data-table/dist/md-data-table',
    'angular-elastic': 'bower_components/angular-elastic/elastic',
    'angular-route': 'bower_components/angular-route/angular-route',
    'angular-ui-ace': 'bower_components/angular-ui-ace/ui-ace',
    'angular-nvd3': 'bower_components/angular-nvd3/dist/angular-nvd3',
    'nvd3': 'bower_components/nvd3/build/nv.d3',
    ace: 'bower_components/ace-builds/src-noconflict/ace',
    'ace-json': 'bower_components/ace-builds/src-noconflict/mode-json',
    ng147: 'bower_components/angular-1.4.7/angular',
    angular: 'bower_components/angular/angular',
    async: 'bower_components/async/lib/async',
    bower_components: 'bower_components',
    css: 'bower_components/require-css/css',
    d3: 'bower_components/d3/d3',
    elasticsearch: 'bower_components/elasticsearch/elasticsearch.angular',
    faker: 'bower_components/Faker/faker',
    file_saver: 'bower_components/FileSaver/FileSaver',
    gridster: 'bower_components/gridster/dist/jquery.gridster',
    'leaflet-heat': 'bower_components/Leaflet.heat/dist/leaflet-heat',
    jquery: 'bower_components/jquery/dist/jquery',
    leaflet: 'bower_components/leaflet/dist/leaflet',
    'leaflet-draw': 'bower_components/leaflet-draw/dist/leaflet.draw',
    lodash_src: 'bower_components/lodash/dist/lodash',
    'lodash-deep': 'bower_components/lodash-deep/factory',
    moment: 'bower_components/moment/moment',
    'ng-clip': 'bower_components/ng-clip/src/ngClip',
    text: 'bower_components/requirejs-text/text',
    zeroclipboard: 'bower_components/zeroclipboard/dist/ZeroClipboard',
    marked: 'bower_components/marked/lib/marked',
    numeral: 'bower_components/numeral/numeral',
    semver: 'bower_components/semver/semver.browser',
    zeusUi: 'directives/zeus-ui'
  },
  shim: {
    angular: {
      deps: ['jquery'],
      exports: 'angular'
    },
    gridster: ['jquery', 'css!bower_components/gridster/dist/jquery.gridster.css'],
    'angular-route': ['angular'],
    'elasticsearch': ['angular'],
    'angular-bootstrap': ['angular'],
    'ngMaterial': ['ng147', 'ngAnimate', 'ngAria'],
    'ngMaterialTable':['ng147', 'ngMaterial'],
    'angular-nvd3': ['angular', 'd3', 'nvd3'],
    'nvd3': ['d3'],
    'ngAnimate': ['ng147'],
    'ngAria': ['angular'],
    'angular-bindonce': ['angular'],
    'ace-json': ['ace'],
    'angular-ui-ace': ['angular', 'ace', 'ace-json'],
    'ng-clip': ['angular', 'zeroclipboard'],
    'leaflet-heat': {
      deps: ['leaflet']
    },
    file_saver: {
      exports: 'saveAs'
    },
    'leaflet-draw': {
      deps: ['leaflet', 'css!bower_components/leaflet-draw/dist/leaflet.draw.css']
    },
    leaflet: {
      deps: ['css!bower_components/leaflet/dist/leaflet.css']
    },
    marked: {
      exports: 'marked'
    }
  },
  waitSeconds: 60
});
