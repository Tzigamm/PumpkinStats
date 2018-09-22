#include "WriteHTML.h"

WriteHTML::WriteHTML(std::vector<DataPoint> data, std::string path)
{
    //18 char to ul ?
    this->data = data;
    this->path = path;
    file = new std::fstream(path);

    file->seekg(-59, std::ios::end);
    CreateFormatting();
    *file << "\t</div>\n\t<script src=\"code.js\"></script>\n\t</body>\n</html>\n";
}

void WriteHTML::CreateFormatting()
{
    *file << "\n\t\t" << "<ul class=\"instance\">\n";

    for(DataPoint i : data)
    {

        *file << "\t\t\t" << "<li class=\"" << i.GetCode() << "\">\n";
        *file << "\t\t\t\t" << "<span class=\"utilisation\">" << i.GetUtil() << "</span>\n";
        *file << "\t\t\t\t" << "<span class=\"activation\">" << i.GetActiv() << "</span>\n";
        *file << "\t\t\t\t" << "<span class=\"points\">" << (i.GetUtil()+5*i.GetActiv()) << "</span>\n";
        *file << "\t\t\t" << "</li>\n";
    }

    *file << "\t\t" << "</ul>\n";
}

WriteHTML::~WriteHTML()
{
    file->close();
    delete file;
}
