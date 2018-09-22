#ifndef SCANNER_H
#define SCANNER_H

#include <string>
#include <fstream>
#include <iostream>
#include <vector>
#include <cstring>
#include <cstdlib>
#include "DataPoint.h"

using namespace std;

std::vector<DataPoint> ScanForData(std::string fileName, std::string *tabCodes, int nbCodes);

#endif
