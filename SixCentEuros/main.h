#ifndef MAIN_H
#define MAIN_H

#define NB_OF_CODES 14

#include <iostream>
#include "DataPoint.h"
#include "Scanner.h"
#include "WriteHTML.h"

using std::cout;
using std::endl;

std::string tabCodes[NB_OF_CODES] =
{
    "KPOTE",
    "INSALAN",
    "CLUB3D",
    "FOG18",
    "ROBOT",
    "INSAKURA",
    "LIVE",
    "CLITO",
    "RACLETTE18",
    "BRICO19",
    "RECYCLE",
    "PUTACLIC",
    "PHOTOVIDEO",
    "TOUTSCHUSS"
};

int main(int argc, char *argv[]);

#endif
