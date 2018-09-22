#include "DataPoint.h"

DataPoint::DataPoint(std::string code, int util, int activ)
{
	this->code = code;
	this->util = util;
	this->activ = activ;
}

DataPoint::~DataPoint()
{

}
