{  
	"NeuralNetworkConfiguration":{  
		"HiddenLayers":[  
		   10,
		   8,
		   3
		],
		"LearingRate": 0.01,
		"MaxEpochs": 1000000,
		"EpochsBetweenReports": 100,
		"DesiredMSE": 0.0000000001
	},
   "InputDataPickers":[  
      {  
      	"Index":0,
      	"Indicator":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataIndicator.MovingAverageIndicator, ArtificialNeuralNetworkDataFeeder",
      		"Period":12
      	},
      	"Normalizer":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataNormalizers.RangeDataNormalizer, ArtificialNeuralNetworkDataFeeder",
      		"MinimumOut":-1.0,
      		"MaximumOut":1.0
      	},
      	"Compiler":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataCompilers.CloseDataCompiler, ArtificialNeuralNetworkDataFeeder"
      	}
      },
      {  
      	"Index":1,
      	"Indicator":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataIndicator.MovingAverageIndicator, ArtificialNeuralNetworkDataFeeder",
      		"Period":12
      	},
      	"Normalizer":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataNormalizers.RangeDataNormalizer, ArtificialNeuralNetworkDataFeeder",
      		"MinimumOut":-1.0,
      		"MaximumOut":1.0
      	},
      	"Compiler":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataCompilers.CloseDataCompiler, ArtificialNeuralNetworkDataFeeder"
      	}
      },
      {  
      	"Index":2,
      	"Indicator":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataIndicator.MovingAverageIndicator, ArtificialNeuralNetworkDataFeeder",
      		"Period":12
      	},
      	"Normalizer":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataNormalizers.RangeDataNormalizer, ArtificialNeuralNetworkDataFeeder",
      		"MinimumOut":-1.0,
      		"MaximumOut":1.0
      	},
      	"Compiler":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataCompilers.CloseDataCompiler, ArtificialNeuralNetworkDataFeeder"
      	}
      },
      {  
      	"Index":3,
      	"Indicator":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataIndicator.MovingAverageIndicator, ArtificialNeuralNetworkDataFeeder",
      		"Period":12
      	},
      	"Normalizer":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataNormalizers.RangeDataNormalizer, ArtificialNeuralNetworkDataFeeder",
      		"MinimumOut":-1.0,
      		"MaximumOut":1.0
      	},
      	"Compiler":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataCompilers.CloseDataCompiler, ArtificialNeuralNetworkDataFeeder"
      	}
      },
      {  
      	"Index":4,
      	"Indicator":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataIndicator.MovingAverageIndicator, ArtificialNeuralNetworkDataFeeder",
      		"Period":12
      	},
      	"Normalizer":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataNormalizers.RangeDataNormalizer, ArtificialNeuralNetworkDataFeeder",
      		"MinimumOut":-1.0,
      		"MaximumOut":1.0
      	},
      	"Compiler":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataCompilers.CloseDataCompiler, ArtificialNeuralNetworkDataFeeder"
      	}
      },
      {  
      	"Index":5,
      	"Indicator":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataIndicator.MovingAverageIndicator, ArtificialNeuralNetworkDataFeeder",
      		"Period":12
      	},
      	"Normalizer":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataNormalizers.RangeDataNormalizer, ArtificialNeuralNetworkDataFeeder",
      		"MinimumOut":-1.0,
      		"MaximumOut":1.0
      	},
      	"Compiler":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataCompilers.CloseDataCompiler, ArtificialNeuralNetworkDataFeeder"
      	}
      },
      {  
      	"Index":6,
      	"Indicator":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataIndicator.MovingAverageIndicator, ArtificialNeuralNetworkDataFeeder",
      		"Period":12
      	},
      	"Normalizer":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataNormalizers.RangeDataNormalizer, ArtificialNeuralNetworkDataFeeder",
      		"MinimumOut":-1.0,
      		"MaximumOut":1.0
      	},
      	"Compiler":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataCompilers.CloseDataCompiler, ArtificialNeuralNetworkDataFeeder"
      	}
      },
      {  
      	"Index":7,
      	"Indicator":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataIndicator.MovingAverageIndicator, ArtificialNeuralNetworkDataFeeder",
      		"Period":12
      	},
      	"Normalizer":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataNormalizers.RangeDataNormalizer, ArtificialNeuralNetworkDataFeeder",
      		"MinimumOut":-1.0,
      		"MaximumOut":1.0
      	},
      	"Compiler":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataCompilers.CloseDataCompiler, ArtificialNeuralNetworkDataFeeder"
      	}
      },
      {  
      	"Index":8,
      	"Indicator":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataIndicator.MovingAverageIndicator, ArtificialNeuralNetworkDataFeeder",
      		"Period":12
      	},
      	"Normalizer":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataNormalizers.RangeDataNormalizer, ArtificialNeuralNetworkDataFeeder",
      		"MinimumOut":-1.0,
      		"MaximumOut":1.0
      	},
      	"Compiler":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataCompilers.CloseDataCompiler, ArtificialNeuralNetworkDataFeeder"
      	}
      }
   ],
   "OutputDataPickers":[  
      {  
      	"Index":9,
      	"Indicator":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataIndicator.MovingAverageIndicator, ArtificialNeuralNetworkDataFeeder",
      		"Period":12
      	},
      	"Normalizer":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataNormalizers.RangeDataNormalizer, ArtificialNeuralNetworkDataFeeder",
      		"MinimumOut":-1.0,
      		"MaximumOut":1.0
      	},
      	"Compiler":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataCompilers.CloseDataCompiler, ArtificialNeuralNetworkDataFeeder"
      	}
      },
      {  
      	"Index":10,
      	"Indicator":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataIndicator.MovingAverageIndicator, ArtificialNeuralNetworkDataFeeder",
      		"Period":12
      	},
      	"Normalizer":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataNormalizers.RangeDataNormalizer, ArtificialNeuralNetworkDataFeeder",
      		"MinimumOut":-1.0,
      		"MaximumOut":1.0
      	},
      	"Compiler":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataCompilers.CloseDataCompiler, ArtificialNeuralNetworkDataFeeder"
      	}
      },
      {  
      	"Index":11,
      	"Indicator":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataIndicator.MovingAverageIndicator, ArtificialNeuralNetworkDataFeeder",
      		"Period":12
      	},
      	"Normalizer":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataNormalizers.RangeDataNormalizer, ArtificialNeuralNetworkDataFeeder",
      		"MinimumOut":-1.0,
      		"MaximumOut":1.0
      	},
      	"Compiler":{  
      		"$type":"ArtificialNeuralNetworkDataFeeder.DataCompilers.CloseDataCompiler, ArtificialNeuralNetworkDataFeeder"
      	}
      }
   ]
}