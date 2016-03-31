define(function (require, module, exports, $http) {

  var _ = require('lodash');
  var scheme = 'https://';
  var host = '128.107.32.76';
  var path = '/api/v1';
  var sig = '/accounts/1/memberdetails';
  var api = scheme + host + path + sig;

  return require('modules').get('apps/zeus-account/myorg')
    .factory('myorgUsersFactory', function ($http) { // temp
      function get(token, cb) {
        /* $http.get(api).then(function (r) {
         proxy-call(api).then(function (r) {
         });*/
        cb((function () {
          return {
            'data': [
              {
                'id': '2',
                'user_name': 'gru',
                'first_name': 'Felonius',
                'last_name': 'Gru',
                'user_email': 'gru@boss.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.910031Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX1234abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    },
                    {
                      'id': '2',
                      'token': 'EXabcdefghijklmnopqrstuvwxyz1234',
                      'name': 'databucket2',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.133661Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'Admin'
                }
              },
              {
                'id': '3',
                'user_name': 'bob',
                'first_name': 'Bob',
                'last_name': 'Minion',
                'user_email': 'bob@the-minion.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.91482Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX4321abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'User'
                }
              },
              {
                'id': '4',
                'user_name': 'chris',
                'first_name': 'Chris',
                'last_name': 'Hope',
                'user_email': 'chris@the-minion.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.91482Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX4321abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'User'
                }
              },
              {
                'id': '5',
                'user_name': 'david',
                'first_name': 'David',
                'last_name': 'Johnson',
                'user_email': 'david@the-minion.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.91482Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX4321abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'User'
                }
              },
              {
                'id': '6',
                'user_name': 'elana',
                'first_name': 'Elena',
                'last_name': 'Foster',
                'user_email': 'elena@the-minion.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.91482Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX4321abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'User'
                }
              },
              {
                'id': '7',
                'user_name': 'finn',
                'first_name': 'Finn',
                'last_name': 'Jenner',
                'user_email': 'fin@the-minion.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.91482Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX4321abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'User'
                }
              },
              {
                'id': '8',
                'user_name': 'glen',
                'first_name': 'Glen',
                'last_name': 'Cool',
                'user_email': 'glen@the-minion.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.91482Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX4321abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'User'
                }
              },
              {
                'id': '9',
                'user_name': 'hillary',
                'first_name': 'Hillary',
                'last_name': 'Clinton',
                'user_email': 'hirary@the-minion.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.91482Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX4321abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'User'
                }
              },
              {
                'id': '10',
                'user_name': 'ian',
                'first_name': 'Ian',
                'last_name': 'Banner',
                'user_email': 'ian@the-minion.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.91482Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX4321abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'User'
                }
              },
              {
                'id': '11',
                'user_name': 'james',
                'first_name': 'James',
                'last_name': 'Brown',
                'user_email': 'gru@boss.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.910031Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX1234abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    },
                    {
                      'id': '2',
                      'token': 'EXabcdefghijklmnopqrstuvwxyz1234',
                      'name': 'databucket2',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.133661Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'Admin'
                }
              },
              {
                'id': '12',
                'user_name': 'king',
                'first_name': 'King',
                'last_name': 'Kahn',
                'user_email': 'gru@boss.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.910031Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX1234abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    },
                    {
                      'id': '2',
                      'token': 'EXabcdefghijklmnopqrstuvwxyz1234',
                      'name': 'databucket2',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.133661Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'Admin'
                }
              },
              {
                'id': '13',
                'user_name': 'linda',
                'first_name': 'Linda',
                'last_name': 'Minion',
                'user_email': 'linda@the-minion.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.91482Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX4321abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'User'
                }
              },
              {
                'id': '14',
                'user_name': 'miles',
                'first_name': 'Miles',
                'last_name': 'Hope',
                'user_email': 'chris@the-minion.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.91482Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX4321abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'User'
                }
              },
              {
                'id': '15',
                'user_name': 'neil',
                'first_name': 'Neil',
                'last_name': 'Johnson',
                'user_email': 'david@the-minion.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.91482Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX4321abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'User'
                }
              },
              {
                'id': '16',
                'user_name': 'oak',
                'first_name': 'Oak',
                'last_name': 'Foster',
                'user_email': 'elena@the-minion.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.91482Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX4321abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'User'
                }
              },
              {
                'id': '17',
                'user_name': 'paul',
                'first_name': 'Paul',
                'last_name': 'Jenner',
                'user_email': 'fin@the-minion.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.91482Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX4321abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'User'
                }
              },
              {
                'id': '18',
                'user_name': 'quen',
                'first_name': 'Quen',
                'last_name': 'Cool',
                'user_email': 'glen@the-minion.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.91482Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX4321abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'User'
                }
              },
              {
                'id': '19',
                'user_name': 'rick',
                'first_name': 'Rick',
                'last_name': 'Clinton',
                'user_email': 'hirary@the-minion.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.91482Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX4321abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'User'
                }
              },
              {
                'id': '20',
                'user_name': 'sam',
                'first_name': 'Sam',
                'last_name': 'Banner',
                'user_email': 'ian@the-minion.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.91482Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX4321abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'User'
                }
              },
              {
                'id': '21',
                'user_name': 'tom',
                'first_name': 'Tom',
                'last_name': 'Brown',
                'user_email': 'tom@boss.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.910031Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX1234abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    },
                    {
                      'id': '2',
                      'token': 'EXabcdefghijklmnopqrstuvwxyz1234',
                      'name': 'databucket2',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.133661Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'Admin'
                }
              },
              {
                'id': '22',
                'user_name': 'ula',
                'first_name': 'Ula',
                'last_name': 'Kahn',
                'user_email': 'ula@boss.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.910031Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX1234abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    },
                    {
                      'id': '2',
                      'token': 'EXabcdefghijklmnopqrstuvwxyz1234',
                      'name': 'databucket2',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.133661Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'Admin'
                }
              },
              {
                'id': '23',
                'user_name': 'victor',
                'first_name': 'Victor',
                'last_name': 'Minion',
                'user_email': 'victor@the-minion.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.91482Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX4321abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'User'
                }
              },
              {
                'id': '24',
                'user_name': 'william',
                'first_name': 'William',
                'last_name': 'Hope',
                'user_email': 'chris@the-minion.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.91482Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX4321abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'User'
                }
              },
              {
                'id': '25',
                'user_name': 'xing',
                'first_name': 'Xing',
                'last_name': 'Johnson',
                'user_email': 'david@the-minion.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.91482Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX4321abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'User'
                }
              },
              {
                'id': '26',
                'user_name': 'young',
                'first_name': 'Young',
                'last_name': 'Foster',
                'user_email': 'young@the-minion.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.91482Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX4321abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'User'
                }
              },
              {
                'id': '27',
                'user_name': 'zing',
                'first_name': 'Zing',
                'last_name': 'Jenner',
                'user_email': 'zing@the-minion.com',
                'status': 'Enabled',
                'created_at': '2016-02-06T01:50:17.91482Z',
                'tags': {
                  'databuckets': [
                    {
                      'id': '1',
                      'token': 'EX4321abcdefghijklmnopqrstuvwxyz',
                      'name': 'databucket1',
                      'account_id': '1',
                      'created_at': '2016-02-06T01:50:18.07124Z',
                      'tags': {
                        'permissions': {
                          '1': {
                            'read': 'true'
                          },
                          '2': {
                            'write': 'true'
                          },
                          '3': {
                            'read': 'true',
                            'write': 'true'
                          }
                        }
                      }
                    }
                  ],
                  'role': 'User'
                }
              }
            ],
            'errors': ''
          };
        })()); // temp
      }

      function create(token, user, cb) {
        $http.post('/myorg/' + token, clean(user)).then(cb);
      }

      function update(user, bucket, cb) {
      }

      function del(users, bucket, cb) {
        users.forEach(function (a) {
          $http.delete('/myorg/' + a.token + '/' + a.id)
            .then(function (r) {
              // TODO What do we do once we know it has been deleted?
            });
        });
      }

      function generate(e) {
        if (e === undefined) {
          e = {status: 'active'};
        }
        var rule = [];
        if (e.myorg_expression) {
          rule = e.myorg_expression.split(' ');
        }
        return {
          id: e.id || undefined,
          generated: e.generated || Date.now(),
          name: e.myorg_name || '',
          username: e.username || '', // TODO This is mandatory
          email: e.email || '',
          token: e.token || '7e97dd28', // TODO How to we find this?
          rule: rule || [],
          rule_name: rule[0] || '',
          rule_operator: rule[1] || '',
          rule_value: rule[2] || '',
          actions: e.emails ? e.emails.split(',') : [],
          buckets: e.buckets ? e.buckets.split(',') : [],
          severity: e.myorg_severity ? e.myorg_severity[1] : 1,
          status: e.status === 'active' ? true : false
        };
      }

      function clean(user) {
        var a = {
          user_name: user.name || user.alert_name,
          username: user.username || 'Simon',
          token: '7e97dd28',
          emails: user.actions.join(',') || '',
          buckets: user.actions.join(',') || '',
          alert_expression: user.rule.join(' ')
        };
        console.log(a);
        return a;
      }

      function parse(users) {
        // TODO We should be able to parse a full response or just an array, for now take full response
        var arr = [];
        users.data.forEach(function (e, i, a) {
          arr.push(generate(e));
        });
        return arr;
      }

      return {
        get: get,
        create: create,
        parse: parse,
        generate: generate,
        update: update,
        del: del
      };

    });
});
