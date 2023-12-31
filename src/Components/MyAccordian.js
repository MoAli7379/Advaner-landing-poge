import React, { useState, useEffect, useRef } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment, IconButton, Box, Paper, Collapse, Divider, Tab, Tabs, Grow } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
});

const MyAccordion = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [value, setValue] = useState(0);

  const searchRef = useRef();
  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const questions = [
    { 
      title: 'Ders İşleyişi ve Rezervasyon Yapma', 
      content: [
        { title: 'Öğretmenler sadece İngilizce konuşursa dersleri anlayacak mıyım?', content: 'Advancer sadece dil pratiği yapmıyorsunuz, aynı zamanda eğlenceli vakit geçiriyorsunuz . Bu format, sizin yabancı öğretmenlerle kolayca etkileşim kurmasını sağlar. Öğrenciler onlara özal hazırlanmış videoları izler ve slaytlara inceler ve öğretmenler öğrencilere bunların içinde ne olduğunu kelimelerle veya mimik ve jestlerle açıklamaya çalışır. Çeviri veya ek açıklamalar olmadan öğrenciler ders materyallerini anlamaya başlar. Birkaç dersten sonra öğrenciler formata alışırlar ve talimatları kolayca anlayabilir, öğretmenlerin söylediklerini tekrar edebilir, sorularını cevaplayabilirler.' },
        { title: 'Deneme dersi sonrası nasıl derslere başlayabilirim?', content: 'Advancer 90 günlük programa başlamak için şu adımları izleyiniz;Menüden Ücretler butonuna tıklayın ve dileğiniz aylık paketi kredi kartı veya banka transferi ile satın alın Hesabınıza giriş yapın ve istediğiniz bir eğitmenden ders rezervasyonu yapın' },
      ]
    },
    { 
      title: 'Genel', 
      content: [
        { title: 'Ders nasıl iptal edilir ve ertelenir?', content: 'Planlı dersinizi, 8 saat öncesine kadar herhangi bir hak kaybı yaşamadan iptal edebilirsiniz. Planlı dersinize 1 saat kalaya kadar, aynı öğretmenin 7 gün içerisinde farklı bir gün ve saatte uygunluğu varsa dersinizi taşıyabilirsiniz.' },
        { title: 'Para iadesi var mı? Kaç gün içerisinde para iadesi yapılabiliyor?', 
          content: [
            <ul>
    <li>1. 45 gün süresince para iade garantisi vardır.</li>
    <li>2. Eğer derslerden ve öğretmenlerden memnun değilseniz, 45 gün içerisinde para iadesi tarafınıza yapılacaktır.</li>
    <li>3. Karar vermek için bir buçuk ayınız bulunuyor!</li>
    <li>4. Planlarınızda bir değişiklik olursa işlemediğiniz dersleriniz iade edilecektir</li>
    <li>5. Ücret iade talebi için bizimle websitemiz chatbot kısmından veya sitenin en altında bulunan whatsapp numaramız ile iletişime geçebilirsiniz.</li>
</ul>

          ]
        },
      ]
    },
  ];


  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} sx={{ p: 3, mt: 2, mx: 'auto', width: '75%', bgcolor: 'background.paper', boxShadow: 0, borderRadius: 2 }} ref={searchRef}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
          {!showSearch && <Typography variant="h4" >Sıkça Sorulan Sorular</Typography>}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
            <Grow in={showSearch}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search..."
                onChange={(event) => setSearchTerm(event.target.value)}
                sx={{ mr: 2, borderRadius: '5px', bgcolor: '#FFFFFF', padding: '0 5px' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grow>
            <IconButton onClick={() => setShowSearch(!showSearch)} color="primary">
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label={questions[0].title} />
            <Tab label={questions[1].title} />
          </Tabs>
          {questions.map((tab, tabIndex) => (
            <TabPanel value={value} index={tabIndex} key={tabIndex}>
              {tab.content
                .filter((question) =>
                  question.title.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((question, index, arr) => (
                  <React.Fragment key={index}>
                    <Accordion sx={{ boxShadow: 'none', '&.Mui-expanded': { margin: '0px' }}}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${tabIndex}${index}-content`}
                        id={`panel${tabIndex}${index}-header`}
                        sx={{ '&:hover': { bgcolor: 'action.hover' }, bgcolor: 'background.paper', minHeight: '48px' }}
                      >
                        <Typography variant="h6">{question.title}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Collapse in={true} timeout="auto" unmountOnExit>
                          <Typography variant="body1">{question.content}</Typography>
                        </Collapse>
                      </AccordionDetails>
                    </Accordion>
                    {index !== arr.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
            </TabPanel>
          ))}
        </Box>
      </Paper>
    </ThemeProvider>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default MyAccordion;
