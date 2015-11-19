using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Linguistique.Valida.Data.Entities
{
    public class eDefect
    {
        public eDefect()
        {

        }
        public eBrand Brand { get; set; }
        public eLanguage Language { get; set; }
        public eUser ApplicationEngg { get; set; }
        public eUser Linguist { get; set; }
        public eApplication Application { get; set; }
        public int SlideNo { get; set; }
        public int TaskNo { get; set; }

        public string Abstract { get; set; }
        public string Description { get; set; }
        public ICollection<eFile> DescriptionFiles { get; set; }
        public string SourceText { get; set; }
        public string TargetText { get; set; }
        public bool ContextRquired { get; set; }
        public int Severity { get; set; }
        public int Category { get; set; }
        public string SuggestionText { get; set; }
        public int Status { get; set; }
        public string LinguistCorrection { get; set; }
        public string QAComment { get; set; }


    }
}
