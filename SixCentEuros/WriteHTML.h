#ifndef WRITEHTML_H
#define WRITEHTML_H

#include <vector>
#include <string>
#include <fstream>
#include "DataPoint.h"

class WriteHTML
{
private:
    std::vector<DataPoint> data;
    std::string path;
    std::fstream *file;
    void CreateFormatting();
public:
    WriteHTML(std::vector<DataPoint> data, std::string path);
    ~WriteHTML();
};

#endif
