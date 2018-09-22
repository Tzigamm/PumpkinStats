#include "Scanner.h"


std::vector<DataPoint> ScanForData(std::string fileName, std::string *tabCodes, int nbCodes)
{
	int i = 0;
	int posFound;
	int posFirstDigit;
	int posLastDigit;

	const std::string utilStr = "utilisation";
	const std::string activStr = "activation";

	int nbUtil = 0;
	int nbActiv = 0;

	std::vector<DataPoint> ret;

	std::string lineStr;

	ifstream file(fileName.c_str());

	if(file.is_open())
	{
		while (!file.eof() && i<nbCodes)
		{
			file >> lineStr;
			posFound = lineStr.find(tabCodes[i]);
			if(posFound != string::npos)
			{
				while(!file.eof())
				{
					std::getline(file, lineStr);
					posFound = lineStr.find(utilStr);
					if(posFound != string::npos)
					{
						while(!isdigit(lineStr.at(posFound)))
							posFound--;
						posLastDigit = posFound+1;

						while(isdigit(lineStr.at(posFound)) && posFound != 0)
							posFound--;
						posFirstDigit = posFound+1;

						nbUtil = atoi(lineStr.substr(posFirstDigit, (posLastDigit-posFirstDigit)).c_str());
					}

					posFound = lineStr.find(activStr);
					if(posFound != string::npos)
					{
						while(!isdigit(lineStr.at(posFound)))
							posFound--;
						posLastDigit = posFound+1;

						while(isdigit(lineStr.at(posFound)) && posFound != 0)
							posFound--;
						posFirstDigit = posFound+1;

						nbActiv = atoi(lineStr.substr(posFirstDigit, (posLastDigit-posFirstDigit)).c_str());
						break;
					}
				}

				ret.push_back(DataPoint(tabCodes[i], nbUtil, nbActiv));

				i++;
				file.clear();
				file.seekg(0, ios::beg);
			}
		}
	}
	else
		cout << "loupé !" << endl;

	return ret;
}
