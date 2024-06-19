import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/material/styles';

export default function IfonDescription() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="info-des">
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <StyledTab label="Описание" value="1" /> 
            <StyledTab label="Состав и пищевая ценность" value="2" /> 
            <StyledTab label="Условия и срок хранения" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <p>Текстовая информация и таблички.</p>
        <p>Для примера рыба-текст</p>
        Банальные, но неопровержимые выводы, а также представители современных социальных резервов смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Сложно сказать, почему активно развивающиеся страны третьего мира неоднозначны и будут указаны как претенденты на роль ключевых факторов. Являясь всего лишь частью общей картины, диаграммы связей призывают нас к новым свершениям, которые, в свою очередь, должны быть своевременно верифицированы.
        </TabPanel>
        <TabPanel value="2">Состав и пищевая ценность</TabPanel>
        <TabPanel value="3">Условия и срок хранения</TabPanel>
      </TabContext>
    </Box>
    </div>
  );
}

const StyledTab = styled(Tab)(({ theme }) => ({
  '&.Mui-selected': {
    color: 'black',
    fontSize: '14px',
    fontWeight: 600,
  },
}));
