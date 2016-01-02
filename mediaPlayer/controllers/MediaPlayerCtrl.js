'use strict';

angular.module('app')
  .controller('MediaPlayerCtrl', ["$scope", function ($scope) {
      //$scope.songs = [
      //    {
      //        title: 'Higgs Boson Blues',
      //        artist: 'Nick Cave And The Bad Seeds',
      //        src: '/mnt/sdcard/Music/8 Higgs Boson Blues.mp3',
      //        art: 'http://upload.wikimedia.org/wikipedia/en/f/f3/Push_the_Sky_Away.jpg'
      //    },
      //    {
      //        title: 'Mind Your Manners',
      //        artist: 'Pearl Jam',
      //        src: '/mnt/sdcard/Music/02 - Mind Your Manners.mp3'
      //    },
      //    {
      //        title: 'History Repeating',
      //        artist: 'Propellerheads',
      //        src: '/mnt/sdcard/Music/05. Propellerheads - History Repeating.mp3'
      //    }
      //    //,
      //    //{
      //    //    title: '',
      //    //    artist: '',
      //    //    src: 'audio/unavailable resource.mp3'
      //    //}
      //];
      $scope.songs = [
        {
            title: 'Looking At The World', // 5.30 min
            artist: 'Chick Corea',
            src: 'http://freedownloads.last.fm/download/6814816/Looking%2BAt%2BThe%2BWorld.mp3',
            art: 'http://userserve-ak.last.fm/serve/126/90745177.jpg'
        },
        {
            title: 'Sound Of Music', // 4+ min
            artist: 'Prague Ska Conspiracy',
            src: 'http://freedownloads.last.fm/download/145187271/Sound%2BOf%2BMusic.mp3',
            art: 'http://userserve-ak.last.fm/serve/126/10239727.jpg'
        },
        {
            title: 'Roots', // 6.30+ min
            artist: 'indigo jam unit',
            src: 'http://freedownloads.last.fm/download/464510093/Roots.mp3'
        },
        {
            title: 'Alice\'s Adventures in Wonderland ', // 6.30+ min
            artist: 'Lewis Carroll',
            src: 'http://etc.usf.edu/lit2go/audio/mp3/alices-adventures-in-wonderland-001-chapter-i-down-the-rabbit-hole.1.mp3',
            art: 'http://etc.usf.edu/lit2go/static/thumbnails/books/1.png'
        }
      ];
  }]);