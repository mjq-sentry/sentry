import {projectStatsToPredictedSeries} from 'sentry/views/settings/project/server-side-sampling/utils/projectStatsToPredictedSeries';

describe('projectStatsToPredictedSeries', function () {
  it('returns correct series', function () {
    expect(projectStatsToPredictedSeries(TestStubs.Outcomes(), 0.3, 0.1)).toEqual([
      {
        seriesName: 'Indexed and Processed',
        color: '#2BA185',
        barMinHeight: 1,
        type: 'bar',
        stack: 'predictedUsage',
        data: [
          {name: 1656788400000, value: 29437},
          {name: 1656792000000, value: 28213},
          {name: 1656795600000, value: 26325},
          {name: 1656799200000, value: 25983},
          {name: 1656802800000, value: 24739},
          {name: 1656806400000, value: 27874},
          {name: 1656810000000, value: 29096},
          {name: 1656813600000, value: 24303},
          {name: 1656817200000, value: 24376},
          {name: 1656820800000, value: 24941},
          {name: 1656824400000, value: 25125},
          {name: 1656828000000, value: 26933},
          {name: 1656831600000, value: 29639},
          {name: 1656835200000, value: 30842},
          {name: 1656838800000, value: 30323},
          {name: 1656842400000, value: 30219},
          {name: 1656846000000, value: 31770},
          {name: 1656849600000, value: 33488},
          {name: 1656853200000, value: 33660},
          {name: 1656856800000, value: 33003},
          {name: 1656860400000, value: 32401},
          {name: 1656864000000, value: 32080},
          {name: 1656867600000, value: 31281},
          {name: 1656871200000, value: 30730},
          {name: 1656874800000, value: 30192},
          {name: 1656878400000, value: 29997},
          {name: 1656882000000, value: 27718},
          {name: 1656885600000, value: 27479},
          {name: 1656889200000, value: 29929},
          {name: 1656892800000, value: 36845},
          {name: 1656896400000, value: 44476},
          {name: 1656900000000, value: 42343},
          {name: 1656903600000, value: 41643},
          {name: 1656907200000, value: 46482},
          {name: 1656910800000, value: 52822},
          {name: 1656914400000, value: 76354},
          {name: 1656918000000, value: 101122},
          {name: 1656921600000, value: 110820},
          {name: 1656925200000, value: 107708},
          {name: 1656928800000, value: 94690},
          {name: 1656932400000, value: 91411},
          {name: 1656936000000, value: 100290},
          {name: 1656939600000, value: 103284},
          {name: 1656943200000, value: 100178},
          {name: 1656946800000, value: 83511},
          {name: 1656950400000, value: 66709},
          {name: 1656954000000, value: 54611},
          {name: 1656957600000, value: 31394},
        ],
      },
      {
        seriesName: 'Processed',
        color: '#F5B000',
        data: [
          {name: 1656788400000, value: 58873},
          {name: 1656792000000, value: 56426},
          {name: 1656795600000, value: 52651},
          {name: 1656799200000, value: 51967},
          {name: 1656802800000, value: 49478},
          {name: 1656806400000, value: 55747},
          {name: 1656810000000, value: 58193},
          {name: 1656813600000, value: 48605},
          {name: 1656817200000, value: 48752},
          {name: 1656820800000, value: 49882},
          {name: 1656824400000, value: 50249},
          {name: 1656828000000, value: 53866},
          {name: 1656831600000, value: 59278},
          {name: 1656835200000, value: 61684},
          {name: 1656838800000, value: 60647},
          {name: 1656842400000, value: 60438},
          {name: 1656846000000, value: 63540},
          {name: 1656849600000, value: 66975},
          {name: 1656853200000, value: 67320},
          {name: 1656856800000, value: 66006},
          {name: 1656860400000, value: 64802},
          {name: 1656864000000, value: 64159},
          {name: 1656867600000, value: 62562},
          {name: 1656871200000, value: 61460},
          {name: 1656874800000, value: 60385},
          {name: 1656878400000, value: 59994},
          {name: 1656882000000, value: 55435},
          {name: 1656885600000, value: 54958},
          {name: 1656889200000, value: 59857},
          {name: 1656892800000, value: 73690},
          {name: 1656896400000, value: 88951},
          {name: 1656900000000, value: 84686},
          {name: 1656903600000, value: 83286},
          {name: 1656907200000, value: 92963},
          {name: 1656910800000, value: 105643},
          {name: 1656914400000, value: 152709},
          {name: 1656918000000, value: 202244},
          {name: 1656921600000, value: 221641},
          {name: 1656925200000, value: 215416},
          {name: 1656928800000, value: 189380},
          {name: 1656932400000, value: 182821},
          {name: 1656936000000, value: 200579},
          {name: 1656939600000, value: 206568},
          {name: 1656943200000, value: 200357},
          {name: 1656946800000, value: 167023},
          {name: 1656950400000, value: 133418},
          {name: 1656954000000, value: 109223},
          {name: 1656957600000, value: 62788},
        ],
        barMinHeight: 1,
        type: 'bar',
        stack: 'predictedUsage',
      },
      {
        seriesName: 'Discarded',
        color: '#F55459',
        data: [
          {name: 1656788400000, value: 206057},
          {name: 1656792000000, value: 197491},
          {name: 1656795600000, value: 184277},
          {name: 1656799200000, value: 181883},
          {name: 1656802800000, value: 173172},
          {name: 1656806400000, value: 195115},
          {name: 1656810000000, value: 203674},
          {name: 1656813600000, value: 170118},
          {name: 1656817200000, value: 170631},
          {name: 1656820800000, value: 174586},
          {name: 1656824400000, value: 175873},
          {name: 1656828000000, value: 188531},
          {name: 1656831600000, value: 207472},
          {name: 1656835200000, value: 215894},
          {name: 1656838800000, value: 212264},
          {name: 1656842400000, value: 211533},
          {name: 1656846000000, value: 222391},
          {name: 1656849600000, value: 234413},
          {name: 1656853200000, value: 235619},
          {name: 1656856800000, value: 231020},
          {name: 1656860400000, value: 226808},
          {name: 1656864000000, value: 224558},
          {name: 1656867600000, value: 218968},
          {name: 1656871200000, value: 215110},
          {name: 1656874800000, value: 211346},
          {name: 1656878400000, value: 209980},
          {name: 1656882000000, value: 194023},
          {name: 1656885600000, value: 192352},
          {name: 1656889200000, value: 209500},
          {name: 1656892800000, value: 257915},
          {name: 1656896400000, value: 311329},
          {name: 1656900000000, value: 296402},
          {name: 1656903600000, value: 291501},
          {name: 1656907200000, value: 325372},
          {name: 1656910800000, value: 369751},
          {name: 1656914400000, value: 534481},
          {name: 1656918000000, value: 707853},
          {name: 1656921600000, value: 775742},
          {name: 1656925200000, value: 753955},
          {name: 1656928800000, value: 662829},
          {name: 1656932400000, value: 639875},
          {name: 1656936000000, value: 702028},
          {name: 1656939600000, value: 722989},
          {name: 1656943200000, value: 701248},
          {name: 1656946800000, value: 584579},
          {name: 1656950400000, value: 466962},
          {name: 1656954000000, value: 382279},
          {name: 1656957600000, value: 219759},
        ],
        barMinHeight: 1,
        type: 'bar',
        stack: 'predictedUsage',
      },
    ]);
  });
});
