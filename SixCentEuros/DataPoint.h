#ifndef DATA_H
#define DATA_H

#include <iostream>
#include <string>

class DataPoint
{
private:
	int util;
	int activ;
	std::string code;
public:
	DataPoint(std::string code, int util, int activ);
	int GetUtil(void) {return util;}
	int GetActiv(void) {return activ;}
	std::string GetCode(void) {return code;}
	~DataPoint();
};

#endif
