var typedoc = typedoc || {}
typedoc.search = typedoc.search || {}
typedoc.search.data = {
	kinds: {
		'4': 'Enumeration',
		'16': 'Enumeration member',
		'32': 'Variable',
		'64': 'Function',
		'128': 'Class',
		'256': 'Interface',
		'512': 'Constructor',
		'1024': 'Property',
		'2048': 'Method',
		'65536': 'Type literal',
		'4194304': 'Type alias',
	},
	rows: [
		{
			id: 0,
			kind: 128,
			name: 'BpmnParser',
			url: 'classes/bpmnparser.html',
			classes: 'tsd-kind-class',
		},
		{
			id: 1,
			kind: 2048,
			name: 'parseBpmn',
			url: 'classes/bpmnparser.html#parsebpmn',
			classes: 'tsd-kind-method tsd-parent-kind-class tsd-is-static',
			parent: 'BpmnParser',
		},
		{
			id: 2,
			kind: 2048,
			name: 'getProcessId',
			url: 'classes/bpmnparser.html#getprocessid',
			classes: 'tsd-kind-method tsd-parent-kind-class tsd-is-static',
			parent: 'BpmnParser',
		},
		{
			id: 3,
			kind: 2048,
			name: 'generateConstantsForBpmnFiles',
			url: 'classes/bpmnparser.html#generateconstantsforbpmnfiles',
			classes: 'tsd-kind-method tsd-parent-kind-class tsd-is-static',
			parent: 'BpmnParser',
		},
		{
			id: 4,
			kind: 2048,
			name: 'getTaskTypes',
			url: 'classes/bpmnparser.html#gettasktypes',
			classes: 'tsd-kind-method tsd-parent-kind-class tsd-is-static',
			parent: 'BpmnParser',
		},
		{
			id: 5,
			kind: 2048,
			name: 'getMessageNames',
			url: 'classes/bpmnparser.html#getmessagenames',
			classes: 'tsd-kind-method tsd-parent-kind-class tsd-is-static',
			parent: 'BpmnParser',
		},
		{
			id: 6,
			kind: 64,
			name: 'stringifyVariables',
			url: 'globals.html#stringifyvariables',
			classes: 'tsd-kind-function tsd-has-type-parameter',
		},
		{
			id: 7,
			kind: 64,
			name: 'parseVariables',
			url: 'globals.html#parsevariables',
			classes: 'tsd-kind-function tsd-has-type-parameter',
		},
		{
			id: 8,
			kind: 128,
			name: 'ZBLogger',
			url: 'classes/zblogger.html',
			classes: 'tsd-kind-class',
		},
		{
			id: 9,
			kind: 1024,
			name: 'loglevel',
			url: 'classes/zblogger.html#loglevel',
			classes: 'tsd-kind-property tsd-parent-kind-class',
			parent: 'ZBLogger',
		},
		{
			id: 10,
			kind: 512,
			name: 'constructor',
			url: 'classes/zblogger.html#constructor',
			classes: 'tsd-kind-constructor tsd-parent-kind-class',
			parent: 'ZBLogger',
		},
		{
			id: 11,
			kind: 2048,
			name: 'info',
			url: 'classes/zblogger.html#info',
			classes: 'tsd-kind-method tsd-parent-kind-class',
			parent: 'ZBLogger',
		},
		{
			id: 12,
			kind: 2048,
			name: 'error',
			url: 'classes/zblogger.html#error',
			classes: 'tsd-kind-method tsd-parent-kind-class',
			parent: 'ZBLogger',
		},
		{
			id: 13,
			kind: 2048,
			name: 'debug',
			url: 'classes/zblogger.html#debug',
			classes: 'tsd-kind-method tsd-parent-kind-class',
			parent: 'ZBLogger',
		},
		{
			id: 14,
			kind: 2048,
			name: 'log',
			url: 'classes/zblogger.html#log',
			classes: 'tsd-kind-method tsd-parent-kind-class',
			parent: 'ZBLogger',
		},
		{
			id: 15,
			kind: 128,
			name: 'ZBWorker',
			url: 'classes/zbworker.html',
			classes: 'tsd-kind-class tsd-has-type-parameter',
		},
		{
			id: 16,
			kind: 1024,
			name: 'activeJobs',
			url: 'classes/zbworker.html#activejobs',
			classes: 'tsd-kind-property tsd-parent-kind-class',
			parent: 'ZBWorker',
		},
		{
			id: 17,
			kind: 1024,
			name: 'gRPCClient',
			url: 'classes/zbworker.html#grpcclient',
			classes: 'tsd-kind-property tsd-parent-kind-class',
			parent: 'ZBWorker',
		},
		{
			id: 18,
			kind: 1024,
			name: 'maxActiveJobs',
			url: 'classes/zbworker.html#maxactivejobs',
			classes: 'tsd-kind-property tsd-parent-kind-class',
			parent: 'ZBWorker',
		},
		{
			id: 19,
			kind: 1024,
			name: 'taskType',
			url: 'classes/zbworker.html#tasktype',
			classes: 'tsd-kind-property tsd-parent-kind-class',
			parent: 'ZBWorker',
		},
		{
			id: 20,
			kind: 1024,
			name: 'timeout',
			url: 'classes/zbworker.html#timeout',
			classes: 'tsd-kind-property tsd-parent-kind-class',
			parent: 'ZBWorker',
		},
		{
			id: 21,
			kind: 512,
			name: 'constructor',
			url: 'classes/zbworker.html#constructor',
			classes: 'tsd-kind-constructor tsd-parent-kind-class',
			parent: 'ZBWorker',
		},
		{
			id: 22,
			kind: 2048,
			name: 'close',
			url: 'classes/zbworker.html#close',
			classes: 'tsd-kind-method tsd-parent-kind-class',
			parent: 'ZBWorker',
		},
		{
			id: 23,
			kind: 2048,
			name: 'work',
			url: 'classes/zbworker.html#work',
			classes: 'tsd-kind-method tsd-parent-kind-class',
			parent: 'ZBWorker',
		},
		{
			id: 24,
			kind: 2048,
			name: 'completeJob',
			url: 'classes/zbworker.html#completejob',
			classes: 'tsd-kind-method tsd-parent-kind-class',
			parent: 'ZBWorker',
		},
		{
			id: 25,
			kind: 2048,
			name: 'onConnectionError',
			url: 'classes/zbworker.html#onconnectionerror',
			classes: 'tsd-kind-method tsd-parent-kind-class',
			parent: 'ZBWorker',
		},
		{
			id: 26,
			kind: 2048,
			name: 'log',
			url: 'classes/zbworker.html#log',
			classes: 'tsd-kind-method tsd-parent-kind-class',
			parent: 'ZBWorker',
		},
		{
			id: 27,
			kind: 2048,
			name: 'getNewLogger',
			url: 'classes/zbworker.html#getnewlogger',
			classes: 'tsd-kind-method tsd-parent-kind-class',
			parent: 'ZBWorker',
		},
		{
			id: 28,
			kind: 256,
			name: 'KeyedObject',
			url: 'interfaces/keyedobject.html',
			classes: 'tsd-kind-interface',
		},
		{
			id: 29,
			kind: 256,
			name: 'CompleteFn',
			url: 'interfaces/completefn.html',
			classes: 'tsd-kind-interface tsd-has-type-parameter',
		},
		{
			id: 30,
			kind: 1024,
			name: 'success',
			url: 'interfaces/completefn.html#success',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'CompleteFn',
		},
		{
			id: 31,
			kind: 65536,
			name: '__type',
			url: 'interfaces/completefn.html#success.__type-1',
			classes:
				'tsd-kind-type-literal tsd-parent-kind-property tsd-is-not-exported',
			parent: 'CompleteFn.success',
		},
		{
			id: 32,
			kind: 1024,
			name: 'failure',
			url: 'interfaces/completefn.html#failure',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'CompleteFn',
		},
		{
			id: 33,
			kind: 65536,
			name: '__type',
			url: 'interfaces/completefn.html#failure.__type',
			classes:
				'tsd-kind-type-literal tsd-parent-kind-property tsd-is-not-exported',
			parent: 'CompleteFn.failure',
		},
		{
			id: 34,
			kind: 256,
			name: 'ZBWorkerLoggerOptions',
			url: 'interfaces/zbworkerloggeroptions.html',
			classes: 'tsd-kind-interface',
		},
		{
			id: 35,
			kind: 1024,
			name: 'loglevel',
			url: 'interfaces/zbworkerloggeroptions.html#loglevel',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ZBWorkerLoggerOptions',
		},
		{
			id: 36,
			kind: 1024,
			name: 'stdout',
			url: 'interfaces/zbworkerloggeroptions.html#stdout',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ZBWorkerLoggerOptions',
		},
		{
			id: 37,
			kind: 1024,
			name: 'color',
			url: 'interfaces/zbworkerloggeroptions.html#color',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ZBWorkerLoggerOptions',
		},
		{
			id: 38,
			kind: 1024,
			name: 'namespace',
			url: 'interfaces/zbworkerloggeroptions.html#namespace',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ZBWorkerLoggerOptions',
		},
		{
			id: 39,
			kind: 256,
			name: 'ActivateJobsResponse',
			url: 'interfaces/activatejobsresponse.html',
			classes: 'tsd-kind-interface',
		},
		{
			id: 40,
			kind: 1024,
			name: 'jobs',
			url: 'interfaces/activatejobsresponse.html#jobs',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ActivateJobsResponse',
		},
		{
			id: 41,
			kind: 256,
			name: 'ActivateJobsRequest',
			url: 'interfaces/activatejobsrequest.html',
			classes: 'tsd-kind-interface',
		},
		{
			id: 42,
			kind: 1024,
			name: 'type',
			url: 'interfaces/activatejobsrequest.html#type',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ActivateJobsRequest',
		},
		{
			id: 43,
			kind: 1024,
			name: 'worker',
			url: 'interfaces/activatejobsrequest.html#worker',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ActivateJobsRequest',
		},
		{
			id: 44,
			kind: 1024,
			name: 'timeout',
			url: 'interfaces/activatejobsrequest.html#timeout',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ActivateJobsRequest',
		},
		{
			id: 45,
			kind: 1024,
			name: 'maxJobsToActivate',
			url: 'interfaces/activatejobsrequest.html#maxjobstoactivate',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ActivateJobsRequest',
		},
		{
			id: 46,
			kind: 1024,
			name: 'fetchVariable',
			url: 'interfaces/activatejobsrequest.html#fetchvariable',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ActivateJobsRequest',
		},
		{
			id: 47,
			kind: 256,
			name: 'ActivatedJob',
			url: 'interfaces/activatedjob.html',
			classes: 'tsd-kind-interface',
		},
		{
			id: 48,
			kind: 1024,
			name: 'key',
			url: 'interfaces/activatedjob.html#key',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ActivatedJob',
		},
		{
			id: 49,
			kind: 1024,
			name: 'type',
			url: 'interfaces/activatedjob.html#type',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ActivatedJob',
		},
		{
			id: 50,
			kind: 1024,
			name: 'jobHeaders',
			url: 'interfaces/activatedjob.html#jobheaders',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ActivatedJob',
		},
		{
			id: 51,
			kind: 1024,
			name: 'customHeaders',
			url: 'interfaces/activatedjob.html#customheaders',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ActivatedJob',
		},
		{
			id: 52,
			kind: 1024,
			name: 'worker',
			url: 'interfaces/activatedjob.html#worker',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ActivatedJob',
		},
		{
			id: 53,
			kind: 1024,
			name: 'retries',
			url: 'interfaces/activatedjob.html#retries',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ActivatedJob',
		},
		{
			id: 54,
			kind: 1024,
			name: 'deadline',
			url: 'interfaces/activatedjob.html#deadline',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ActivatedJob',
		},
		{
			id: 55,
			kind: 1024,
			name: 'variables',
			url: 'interfaces/activatedjob.html#variables',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ActivatedJob',
		},
		{
			id: 56,
			kind: 256,
			name: 'Job',
			url: 'interfaces/job.html',
			classes: 'tsd-kind-interface tsd-has-type-parameter',
		},
		{
			id: 57,
			kind: 1024,
			name: 'key',
			url: 'interfaces/job.html#key',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'Job',
		},
		{
			id: 58,
			kind: 1024,
			name: 'type',
			url: 'interfaces/job.html#type',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'Job',
		},
		{
			id: 59,
			kind: 1024,
			name: 'jobHeaders',
			url: 'interfaces/job.html#jobheaders',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'Job',
		},
		{
			id: 60,
			kind: 1024,
			name: 'customHeaders',
			url: 'interfaces/job.html#customheaders',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'Job',
		},
		{
			id: 61,
			kind: 1024,
			name: 'worker',
			url: 'interfaces/job.html#worker',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'Job',
		},
		{
			id: 62,
			kind: 1024,
			name: 'retries',
			url: 'interfaces/job.html#retries',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'Job',
		},
		{
			id: 63,
			kind: 1024,
			name: 'deadline',
			url: 'interfaces/job.html#deadline',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'Job',
		},
		{
			id: 64,
			kind: 1024,
			name: 'variables',
			url: 'interfaces/job.html#variables',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'Job',
		},
		{
			id: 65,
			kind: 256,
			name: 'JobHeaders',
			url: 'interfaces/jobheaders.html',
			classes: 'tsd-kind-interface',
		},
		{
			id: 66,
			kind: 1024,
			name: 'workflowInstanceKey',
			url: 'interfaces/jobheaders.html#workflowinstancekey',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'JobHeaders',
		},
		{
			id: 67,
			kind: 1024,
			name: 'bpmnProcessId',
			url: 'interfaces/jobheaders.html#bpmnprocessid',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'JobHeaders',
		},
		{
			id: 68,
			kind: 1024,
			name: 'workflowDefinitionVersion',
			url: 'interfaces/jobheaders.html#workflowdefinitionversion',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'JobHeaders',
		},
		{
			id: 69,
			kind: 1024,
			name: 'workflowKey',
			url: 'interfaces/jobheaders.html#workflowkey',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'JobHeaders',
		},
		{
			id: 70,
			kind: 1024,
			name: 'elementId',
			url: 'interfaces/jobheaders.html#elementid',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'JobHeaders',
		},
		{
			id: 71,
			kind: 1024,
			name: 'elementInstanceKey',
			url: 'interfaces/jobheaders.html#elementinstancekey',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'JobHeaders',
		},
		{
			id: 72,
			kind: 256,
			name: 'ZBWorkerOptions',
			url: 'interfaces/zbworkeroptions.html',
			classes: 'tsd-kind-interface',
		},
		{
			id: 73,
			kind: 1024,
			name: 'maxJobsToActivate',
			url: 'interfaces/zbworkeroptions.html#maxjobstoactivate',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ZBWorkerOptions',
		},
		{
			id: 74,
			kind: 1024,
			name: 'timeout',
			url: 'interfaces/zbworkeroptions.html#timeout',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ZBWorkerOptions',
		},
		{
			id: 75,
			kind: 1024,
			name: 'pollInterval',
			url: 'interfaces/zbworkeroptions.html#pollinterval',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ZBWorkerOptions',
		},
		{
			id: 76,
			kind: 1024,
			name: 'fetchVariable',
			url: 'interfaces/zbworkeroptions.html#fetchvariable',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ZBWorkerOptions',
		},
		{
			id: 77,
			kind: 1024,
			name: 'onConnectionErrorHandler',
			url: 'interfaces/zbworkeroptions.html#onconnectionerrorhandler',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ZBWorkerOptions',
		},
		{
			id: 78,
			kind: 1024,
			name: 'failWorkflowOnException',
			url: 'interfaces/zbworkeroptions.html#failworkflowonexception',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ZBWorkerOptions',
		},
		{
			id: 79,
			kind: 256,
			name: 'CreateWorkflowInstanceRequest',
			url: 'interfaces/createworkflowinstancerequest.html',
			classes: 'tsd-kind-interface tsd-has-type-parameter',
		},
		{
			id: 80,
			kind: 1024,
			name: 'bpmnProcessId',
			url: 'interfaces/createworkflowinstancerequest.html#bpmnprocessid',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'CreateWorkflowInstanceRequest',
		},
		{
			id: 81,
			kind: 1024,
			name: 'version',
			url: 'interfaces/createworkflowinstancerequest.html#version',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'CreateWorkflowInstanceRequest',
		},
		{
			id: 82,
			kind: 1024,
			name: 'variables',
			url: 'interfaces/createworkflowinstancerequest.html#variables',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'CreateWorkflowInstanceRequest',
		},
		{
			id: 83,
			kind: 256,
			name: 'CreateWorkflowInstanceResponse',
			url: 'interfaces/createworkflowinstanceresponse.html',
			classes: 'tsd-kind-interface',
		},
		{
			id: 84,
			kind: 1024,
			name: 'workflowKey',
			url: 'interfaces/createworkflowinstanceresponse.html#workflowkey',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'CreateWorkflowInstanceResponse',
		},
		{
			id: 85,
			kind: 1024,
			name: 'bpmnProcessId',
			url: 'interfaces/createworkflowinstanceresponse.html#bpmnprocessid',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'CreateWorkflowInstanceResponse',
		},
		{
			id: 86,
			kind: 1024,
			name: 'version',
			url: 'interfaces/createworkflowinstanceresponse.html#version',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'CreateWorkflowInstanceResponse',
		},
		{
			id: 87,
			kind: 1024,
			name: 'workflowInstanceKey',
			url:
				'interfaces/createworkflowinstanceresponse.html#workflowinstancekey',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'CreateWorkflowInstanceResponse',
		},
		{
			id: 88,
			kind: 4,
			name: 'PartitionBrokerRole',
			url: 'enums/partitionbrokerrole.html',
			classes: 'tsd-kind-enum',
		},
		{
			id: 89,
			kind: 16,
			name: 'LEADER',
			url: 'enums/partitionbrokerrole.html#leader',
			classes: 'tsd-kind-enum-member tsd-parent-kind-enum',
			parent: 'PartitionBrokerRole',
		},
		{
			id: 90,
			kind: 16,
			name: 'BROKER',
			url: 'enums/partitionbrokerrole.html#broker',
			classes: 'tsd-kind-enum-member tsd-parent-kind-enum',
			parent: 'PartitionBrokerRole',
		},
		{
			id: 91,
			kind: 256,
			name: 'Partition',
			url: 'interfaces/partition.html',
			classes: 'tsd-kind-interface',
		},
		{
			id: 92,
			kind: 1024,
			name: 'partitionId',
			url: 'interfaces/partition.html#partitionid',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'Partition',
		},
		{
			id: 93,
			kind: 1024,
			name: 'role',
			url: 'interfaces/partition.html#role',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'Partition',
		},
		{
			id: 94,
			kind: 256,
			name: 'BrokerInfo',
			url: 'interfaces/brokerinfo.html',
			classes: 'tsd-kind-interface',
		},
		{
			id: 95,
			kind: 1024,
			name: 'nodeId',
			url: 'interfaces/brokerinfo.html#nodeid',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'BrokerInfo',
		},
		{
			id: 96,
			kind: 1024,
			name: 'host',
			url: 'interfaces/brokerinfo.html#host',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'BrokerInfo',
		},
		{
			id: 97,
			kind: 1024,
			name: 'port',
			url: 'interfaces/brokerinfo.html#port',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'BrokerInfo',
		},
		{
			id: 98,
			kind: 1024,
			name: 'partitions',
			url: 'interfaces/brokerinfo.html#partitions',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'BrokerInfo',
		},
		{
			id: 99,
			kind: 256,
			name: 'TopologyResponse',
			url: 'interfaces/topologyresponse.html',
			classes: 'tsd-kind-interface',
		},
		{
			id: 100,
			kind: 1024,
			name: 'brokers',
			url: 'interfaces/topologyresponse.html#brokers',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'TopologyResponse',
		},
		{
			id: 101,
			kind: 1024,
			name: 'clusterSize',
			url: 'interfaces/topologyresponse.html#clustersize',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'TopologyResponse',
		},
		{
			id: 102,
			kind: 1024,
			name: 'partitionsCount',
			url: 'interfaces/topologyresponse.html#partitionscount',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'TopologyResponse',
		},
		{
			id: 103,
			kind: 1024,
			name: 'replicationFactor',
			url: 'interfaces/topologyresponse.html#replicationfactor',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'TopologyResponse',
		},
		{
			id: 104,
			kind: 4,
			name: 'ResourceType',
			url: 'enums/resourcetype.html',
			classes: 'tsd-kind-enum',
		},
		{
			id: 105,
			kind: 16,
			name: 'FILE',
			url: 'enums/resourcetype.html#file',
			classes: 'tsd-kind-enum-member tsd-parent-kind-enum',
			parent: 'ResourceType',
		},
		{
			id: 106,
			kind: 16,
			name: 'BPMN',
			url: 'enums/resourcetype.html#bpmn',
			classes: 'tsd-kind-enum-member tsd-parent-kind-enum',
			parent: 'ResourceType',
		},
		{
			id: 107,
			kind: 16,
			name: 'YAML',
			url: 'enums/resourcetype.html#yaml',
			classes: 'tsd-kind-enum-member tsd-parent-kind-enum',
			parent: 'ResourceType',
		},
		{
			id: 108,
			kind: 256,
			name: 'WorkflowRequestObject',
			url: 'interfaces/workflowrequestobject.html',
			classes: 'tsd-kind-interface',
		},
		{
			id: 109,
			kind: 1024,
			name: 'name',
			url: 'interfaces/workflowrequestobject.html#name',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'WorkflowRequestObject',
		},
		{
			id: 110,
			kind: 1024,
			name: 'type',
			url: 'interfaces/workflowrequestobject.html#type',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'WorkflowRequestObject',
		},
		{
			id: 111,
			kind: 1024,
			name: 'definition',
			url: 'interfaces/workflowrequestobject.html#definition',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'WorkflowRequestObject',
		},
		{
			id: 112,
			kind: 256,
			name: 'WorkflowMetadata',
			url: 'interfaces/workflowmetadata.html',
			classes: 'tsd-kind-interface',
		},
		{
			id: 113,
			kind: 1024,
			name: 'bpmnProcessId',
			url: 'interfaces/workflowmetadata.html#bpmnprocessid',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'WorkflowMetadata',
		},
		{
			id: 114,
			kind: 1024,
			name: 'version',
			url: 'interfaces/workflowmetadata.html#version',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'WorkflowMetadata',
		},
		{
			id: 115,
			kind: 1024,
			name: 'workflowKey',
			url: 'interfaces/workflowmetadata.html#workflowkey',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'WorkflowMetadata',
		},
		{
			id: 116,
			kind: 1024,
			name: 'resourceName',
			url: 'interfaces/workflowmetadata.html#resourcename',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'WorkflowMetadata',
		},
		{
			id: 117,
			kind: 256,
			name: 'DeployWorkflowResponse',
			url: 'interfaces/deployworkflowresponse.html',
			classes: 'tsd-kind-interface',
		},
		{
			id: 118,
			kind: 1024,
			name: 'key',
			url: 'interfaces/deployworkflowresponse.html#key',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'DeployWorkflowResponse',
		},
		{
			id: 119,
			kind: 1024,
			name: 'workflows',
			url: 'interfaces/deployworkflowresponse.html#workflows',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'DeployWorkflowResponse',
		},
		{
			id: 120,
			kind: 256,
			name: 'DeployWorkflowRequest',
			url: 'interfaces/deployworkflowrequest.html',
			classes: 'tsd-kind-interface',
		},
		{
			id: 121,
			kind: 1024,
			name: 'workflows',
			url: 'interfaces/deployworkflowrequest.html#workflows',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'DeployWorkflowRequest',
		},
		{
			id: 122,
			kind: 256,
			name: 'ListWorkflowResponse',
			url: 'interfaces/listworkflowresponse.html',
			classes: 'tsd-kind-interface',
		},
		{
			id: 123,
			kind: 1024,
			name: 'workflows',
			url: 'interfaces/listworkflowresponse.html#workflows',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ListWorkflowResponse',
		},
		{
			id: 124,
			kind: 256,
			name: 'PublishMessageRequest',
			url: 'interfaces/publishmessagerequest.html',
			classes: 'tsd-kind-interface tsd-has-type-parameter',
		},
		{
			id: 125,
			kind: 1024,
			name: 'name',
			url: 'interfaces/publishmessagerequest.html#name',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'PublishMessageRequest',
		},
		{
			id: 126,
			kind: 1024,
			name: 'correlationKey',
			url: 'interfaces/publishmessagerequest.html#correlationkey',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'PublishMessageRequest',
		},
		{
			id: 127,
			kind: 1024,
			name: 'timeToLive',
			url: 'interfaces/publishmessagerequest.html#timetolive',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'PublishMessageRequest',
		},
		{
			id: 128,
			kind: 1024,
			name: 'messageId',
			url: 'interfaces/publishmessagerequest.html#messageid',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'PublishMessageRequest',
		},
		{
			id: 129,
			kind: 1024,
			name: 'variables',
			url: 'interfaces/publishmessagerequest.html#variables',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'PublishMessageRequest',
		},
		{
			id: 130,
			kind: 256,
			name: 'PublishStartMessageRequest',
			url: 'interfaces/publishstartmessagerequest.html',
			classes: 'tsd-kind-interface tsd-has-type-parameter',
		},
		{
			id: 131,
			kind: 1024,
			name: 'name',
			url: 'interfaces/publishstartmessagerequest.html#name',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'PublishStartMessageRequest',
		},
		{
			id: 132,
			kind: 1024,
			name: 'timeToLive',
			url: 'interfaces/publishstartmessagerequest.html#timetolive',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'PublishStartMessageRequest',
		},
		{
			id: 133,
			kind: 1024,
			name: 'messageId',
			url: 'interfaces/publishstartmessagerequest.html#messageid',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'PublishStartMessageRequest',
		},
		{
			id: 134,
			kind: 1024,
			name: 'correlationKey',
			url: 'interfaces/publishstartmessagerequest.html#correlationkey',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'PublishStartMessageRequest',
		},
		{
			id: 135,
			kind: 1024,
			name: 'variables',
			url: 'interfaces/publishstartmessagerequest.html#variables',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'PublishStartMessageRequest',
		},
		{
			id: 136,
			kind: 256,
			name: 'UpdateJobRetriesRequest',
			url: 'interfaces/updatejobretriesrequest.html',
			classes: 'tsd-kind-interface',
		},
		{
			id: 137,
			kind: 1024,
			name: 'jobKey',
			url: 'interfaces/updatejobretriesrequest.html#jobkey',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'UpdateJobRetriesRequest',
		},
		{
			id: 138,
			kind: 1024,
			name: 'retries',
			url: 'interfaces/updatejobretriesrequest.html#retries',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'UpdateJobRetriesRequest',
		},
		{
			id: 139,
			kind: 256,
			name: 'FailJobRequest',
			url: 'interfaces/failjobrequest.html',
			classes: 'tsd-kind-interface',
		},
		{
			id: 140,
			kind: 1024,
			name: 'jobKey',
			url: 'interfaces/failjobrequest.html#jobkey',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'FailJobRequest',
		},
		{
			id: 141,
			kind: 1024,
			name: 'retries',
			url: 'interfaces/failjobrequest.html#retries',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'FailJobRequest',
		},
		{
			id: 142,
			kind: 1024,
			name: 'errorMessage',
			url: 'interfaces/failjobrequest.html#errormessage',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'FailJobRequest',
		},
		{
			id: 143,
			kind: 256,
			name: 'CompleteJobRequest',
			url: 'interfaces/completejobrequest.html',
			classes: 'tsd-kind-interface tsd-has-type-parameter',
		},
		{
			id: 144,
			kind: 1024,
			name: 'jobKey',
			url: 'interfaces/completejobrequest.html#jobkey',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'CompleteJobRequest',
		},
		{
			id: 145,
			kind: 1024,
			name: 'variables',
			url: 'interfaces/completejobrequest.html#variables',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'CompleteJobRequest',
		},
		{
			id: 146,
			kind: 256,
			name: 'SetVariablesRequest',
			url: 'interfaces/setvariablesrequest.html',
			classes: 'tsd-kind-interface tsd-has-type-parameter',
		},
		{
			id: 147,
			kind: 1024,
			name: 'elementInstanceKey',
			url: 'interfaces/setvariablesrequest.html#elementinstancekey',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'SetVariablesRequest',
		},
		{
			id: 148,
			kind: 1024,
			name: 'variables',
			url: 'interfaces/setvariablesrequest.html#variables',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'SetVariablesRequest',
		},
		{
			id: 149,
			kind: 1024,
			name: 'local',
			url: 'interfaces/setvariablesrequest.html#local',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'SetVariablesRequest',
		},
		{
			id: 150,
			kind: 256,
			name: 'GetWorkflowRequestWithWorkflowKey',
			url: 'interfaces/getworkflowrequestwithworkflowkey.html',
			classes: 'tsd-kind-interface',
		},
		{
			id: 151,
			kind: 1024,
			name: 'workflowKey',
			url:
				'interfaces/getworkflowrequestwithworkflowkey.html#workflowkey',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'GetWorkflowRequestWithWorkflowKey',
		},
		{
			id: 152,
			kind: 256,
			name: 'GetWorkflowRequestWithBpmnProcessId',
			url: 'interfaces/getworkflowrequestwithbpmnprocessid.html',
			classes: 'tsd-kind-interface',
		},
		{
			id: 153,
			kind: 1024,
			name: 'version',
			url: 'interfaces/getworkflowrequestwithbpmnprocessid.html#version',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'GetWorkflowRequestWithBpmnProcessId',
		},
		{
			id: 154,
			kind: 1024,
			name: 'bpmnProcessId',
			url:
				'interfaces/getworkflowrequestwithbpmnprocessid.html#bpmnprocessid',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'GetWorkflowRequestWithBpmnProcessId',
		},
		{
			id: 155,
			kind: 256,
			name: 'GetWorkflowResponse',
			url: 'interfaces/getworkflowresponse.html',
			classes: 'tsd-kind-interface',
		},
		{
			id: 156,
			kind: 1024,
			name: 'workflowKey',
			url: 'interfaces/getworkflowresponse.html#workflowkey',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'GetWorkflowResponse',
		},
		{
			id: 157,
			kind: 1024,
			name: 'version',
			url: 'interfaces/getworkflowresponse.html#version',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'GetWorkflowResponse',
		},
		{
			id: 158,
			kind: 1024,
			name: 'bpmnProcessId',
			url: 'interfaces/getworkflowresponse.html#bpmnprocessid',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'GetWorkflowResponse',
		},
		{
			id: 159,
			kind: 1024,
			name: 'resourceName',
			url: 'interfaces/getworkflowresponse.html#resourcename',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'GetWorkflowResponse',
		},
		{
			id: 160,
			kind: 1024,
			name: 'bpmnXml',
			url: 'interfaces/getworkflowresponse.html#bpmnxml',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'GetWorkflowResponse',
		},
		{
			id: 161,
			kind: 256,
			name: 'ZBClientOptions',
			url: 'interfaces/zbclientoptions.html',
			classes: 'tsd-kind-interface',
		},
		{
			id: 162,
			kind: 1024,
			name: 'loglevel',
			url: 'interfaces/zbclientoptions.html#loglevel',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ZBClientOptions',
		},
		{
			id: 163,
			kind: 1024,
			name: 'stdout',
			url: 'interfaces/zbclientoptions.html#stdout',
			classes: 'tsd-kind-property tsd-parent-kind-interface',
			parent: 'ZBClientOptions',
		},
		{
			id: 164,
			kind: 4194304,
			name: 'Loglevel',
			url: 'globals.html#loglevel',
			classes: 'tsd-kind-type-alias',
		},
		{
			id: 165,
			kind: 4194304,
			name: 'ZBWorkerTaskHandler',
			url: 'globals.html#zbworkertaskhandler',
			classes: 'tsd-kind-type-alias tsd-has-type-parameter',
		},
		{
			id: 166,
			kind: 65536,
			name: '__type',
			url: 'globals.html#zbworkertaskhandler.__type',
			classes:
				'tsd-kind-type-literal tsd-parent-kind-type-alias tsd-is-not-exported',
			parent: 'ZBWorkerTaskHandler',
		},
		{
			id: 167,
			kind: 4194304,
			name: 'ConnectionErrorHandler',
			url: 'globals.html#connectionerrorhandler',
			classes: 'tsd-kind-type-alias',
		},
		{
			id: 168,
			kind: 65536,
			name: '__type',
			url: 'globals.html#connectionerrorhandler.__type',
			classes:
				'tsd-kind-type-literal tsd-parent-kind-type-alias tsd-is-not-exported',
			parent: 'ConnectionErrorHandler',
		},
		{
			id: 169,
			kind: 4194304,
			name: 'GetWorkflowRequest',
			url: 'globals.html#getworkflowrequest',
			classes: 'tsd-kind-type-alias',
		},
		{
			id: 170,
			kind: 128,
			name: 'ZBClient',
			url: 'classes/zbclient.html',
			classes: 'tsd-kind-class',
		},
		{
			id: 171,
			kind: 1024,
			name: 'gatewayAddress',
			url: 'classes/zbclient.html#gatewayaddress',
			classes: 'tsd-kind-property tsd-parent-kind-class',
			parent: 'ZBClient',
		},
		{
			id: 172,
			kind: 512,
			name: 'constructor',
			url: 'classes/zbclient.html#constructor',
			classes: 'tsd-kind-constructor tsd-parent-kind-class',
			parent: 'ZBClient',
		},
		{
			id: 173,
			kind: 2048,
			name: 'createWorker',
			url: 'classes/zbclient.html#createworker',
			classes:
				'tsd-kind-method tsd-parent-kind-class tsd-has-type-parameter',
			parent: 'ZBClient',
		},
		{
			id: 174,
			kind: 2048,
			name: 'close',
			url: 'classes/zbclient.html#close',
			classes: 'tsd-kind-method tsd-parent-kind-class',
			parent: 'ZBClient',
		},
		{
			id: 175,
			kind: 2048,
			name: 'topology',
			url: 'classes/zbclient.html#topology',
			classes: 'tsd-kind-method tsd-parent-kind-class',
			parent: 'ZBClient',
		},
		{
			id: 176,
			kind: 2048,
			name: 'deployWorkflow',
			url: 'classes/zbclient.html#deployworkflow',
			classes: 'tsd-kind-method tsd-parent-kind-class',
			parent: 'ZBClient',
		},
		{
			id: 177,
			kind: 2048,
			name: 'getServiceTypesFromBpmn',
			url: 'classes/zbclient.html#getservicetypesfrombpmn',
			classes: 'tsd-kind-method tsd-parent-kind-class',
			parent: 'ZBClient',
		},
		{
			id: 178,
			kind: 2048,
			name: 'publishMessage',
			url: 'classes/zbclient.html#publishmessage',
			classes:
				'tsd-kind-method tsd-parent-kind-class tsd-has-type-parameter',
			parent: 'ZBClient',
		},
		{
			id: 179,
			kind: 2048,
			name: 'publishStartMessage',
			url: 'classes/zbclient.html#publishstartmessage',
			classes:
				'tsd-kind-method tsd-parent-kind-class tsd-has-type-parameter',
			parent: 'ZBClient',
		},
		{
			id: 180,
			kind: 2048,
			name: 'updateJobRetries',
			url: 'classes/zbclient.html#updatejobretries',
			classes: 'tsd-kind-method tsd-parent-kind-class',
			parent: 'ZBClient',
		},
		{
			id: 181,
			kind: 2048,
			name: 'failJob',
			url: 'classes/zbclient.html#failjob',
			classes: 'tsd-kind-method tsd-parent-kind-class',
			parent: 'ZBClient',
		},
		{
			id: 182,
			kind: 2048,
			name: 'createWorkflowInstance',
			url: 'classes/zbclient.html#createworkflowinstance',
			classes:
				'tsd-kind-method tsd-parent-kind-class tsd-has-type-parameter',
			parent: 'ZBClient',
		},
		{
			id: 183,
			kind: 2048,
			name: 'cancelWorkflowInstance',
			url: 'classes/zbclient.html#cancelworkflowinstance',
			classes: 'tsd-kind-method tsd-parent-kind-class',
			parent: 'ZBClient',
		},
		{
			id: 184,
			kind: 2048,
			name: 'setVariables',
			url: 'classes/zbclient.html#setvariables',
			classes:
				'tsd-kind-method tsd-parent-kind-class tsd-has-type-parameter',
			parent: 'ZBClient',
		},
		{
			id: 185,
			kind: 2048,
			name: 'listWorkflows',
			url: 'classes/zbclient.html#listworkflows',
			classes: 'tsd-kind-method tsd-parent-kind-class',
			parent: 'ZBClient',
		},
		{
			id: 186,
			kind: 2048,
			name: 'getWorkflow',
			url: 'classes/zbclient.html#getworkflow',
			classes: 'tsd-kind-method tsd-parent-kind-class',
			parent: 'ZBClient',
		},
		{
			id: 187,
			kind: 2048,
			name: 'resolveIncident',
			url: 'classes/zbclient.html#resolveincident',
			classes: 'tsd-kind-method tsd-parent-kind-class',
			parent: 'ZBClient',
		},
		{
			id: 188,
			kind: 32,
			name: 'idColors',
			url: 'globals.html#idcolors',
			classes: 'tsd-kind-variable tsd-is-not-exported',
		},
		{
			id: 189,
			kind: 64,
			name: 'stringifyPayload',
			url: 'globals.html#stringifypayload',
			classes: 'tsd-kind-function',
		},
		{
			id: 190,
			kind: 64,
			name: 'parsePayload',
			url: 'globals.html#parsepayload',
			classes: 'tsd-kind-function',
		},
	],
}
