{
	"targets": [
		{
			"target_name": "opr",
			"sources": [ "src/cpp/opr.cpp"],
			"include_dirs": [
				"<!(node -e\"require('nan')\")"
			]
		}
	]
}