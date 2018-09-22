#include "main.h"

int main(int argc, char *argv[])
{
	if(argc < 2)
	{
		cout << "Lancez Launcher.sh svp" << endl;
	}
	else
	{
		std::string path = argv[1];

		std::vector<DataPoint> vect;
		vect = ScanForData(path, tabCodes, NB_OF_CODES);

		WriteHTML(vect, "data.html");
	}
}
