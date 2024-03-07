new Vue({
  el: '#app',
  data: {
    communicationLogs: [],
    newLog: {
      callSign: '',
      mode: 'FM',
      frequency: '2m',
      signalReportReceived: '',
      signalReportSent: '',
      equipment: 'Handheld',
      antenna: 'Dipole',
      power: '5W',
      communicationType: 'CW',
      province: '',
      city: '',
    },
    provinces: ['北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '上海', '江苏',
  '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西',
  '海南', '重庆', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏',
  '新疆', '台湾', '香港', '澳门'],
    cities: {
  '北京': ['北京市'],
  '天津': ['天津市'],
  '河北': ['石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '保定', '张家口', '承德', '沧州', '廊坊', '衡水'],
  '山西': ['太原', '大同', '阳泉', '长治', '晋城', '朔州', '晋中', '运城', '忻州', '临汾', '吕梁'],
  '内蒙古': ['呼和浩特', '包头', '乌海', '赤峰', '通辽', '鄂尔多斯', '呼伦贝尔', '巴彦淖尔', '乌兰察布', '兴安盟', '锡林郭勒盟', '阿拉善盟'],
  '辽宁': ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '盘锦', '铁岭', '朝阳', '葫芦岛'],
  '吉林': ['长春', '吉林市', '四平', '辽源', '通化', '白山', '松原', '白城', '延边朝鲜族自治州'],
  '黑龙江': ['哈尔滨', '齐齐哈尔', '鸡西', '鹤岗', '双鸭山', '大庆', '伊春', '佳木斯', '七台河', '牡丹江', '黑河', '绥化', '大兴安岭'],
  '上海': ['上海市'],
  '江苏': ['南京', '无锡', '徐州', '常州', '苏州', '南通', '连云港', '淮安', '盐城', '扬州', '镇江', '泰州', '宿迁'],
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
  '安徽': ['合肥', '芜湖', '蚌埠', '淮南', '马鞍山', '淮北', '铜陵', '安庆', '黄山', '滁州', '阜阳', '宿州', '六安', '亳州', '池州', '宣城'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德'],
  '江西': ['南昌', '景德镇', '萍乡', '九江', '新余', '鹰潭', '赣州', '吉安', '宜春', '抚州', '上饶'],
  '山东': ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽'],
  '河南': ['郑州', '开封', '洛阳', '平顶山', '安阳', '鹤壁', '新乡', '焦作', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '信阳', '周口', '驻马店', '济源'],
  '湖北': ['武汉', '黄石', '十堰', '宜昌', '襄阳', '鄂州', '荆门', '孝感', '荆州', '黄冈', '咸宁', '随州', '恩施', '仙桃', '潜江', '天门', '神农架'],
  '湖南': ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西'],
  '广东': ['广州', '韶关', '深圳', '珠海', '汕头', '佛山', '江门', '湛江', '茂名', '肇庆', '惠州', '梅州', '汕尾', '河源', '阳江', '清远', '东莞', '中山', '潮州', '揭阳', '云浮'],
  '广西': ['南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '百色', '贺州', '河池', '来宾', '崇左'],
  '海南': ['海口', '三亚', '三沙', '儋州'],
  '重庆': ['重庆市'],
  '四川': ['成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充', '眉山', '宜宾', '广安', '达州', '雅安', '巴中', '资阳', '阿坝', '甘孜', '凉山'],
  '贵州': ['贵阳', '六盘水', '遵义', '安顺', '毕节', '铜仁', '黔西南', '黔东南', '黔南'],
  '云南': ['昆明', '曲靖', '玉溪', '保山', '昭通', '丽江', '普洱', '临沧', '楚雄', '红河', '文山', '西双版纳', '大理', '德宏', '怒江', '迪庆'],
  '西藏': ['拉萨', '日喀则', '昌都', '林芝', '山南', '那曲', '阿里'],
  '陕西': ['西安', '铜川', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '安康', '商洛'],
  '甘肃': ['兰州', '嘉峪关', '金昌', '白银', '天水', '武威', '张掖', '平凉', '酒泉', '庆阳', '定西', '陇南', '临夏', '甘南'],
  '青海': ['西宁', '海东', '海北', '黄南', '海南藏族自治州', '果洛', '玉树', '海西'],
  '宁夏': ['银川', '石嘴山', '吴忠', '固原', '中卫'],
  '新疆': ['乌鲁木齐', '克拉玛依', '吐鲁番', '哈密', '昌吉', '博尔塔拉', '巴音郭楞', '阿克苏', '克孜勒苏', '喀什', '和田', '伊犁', '塔城', '阿勒泰', '石河子', '阿拉尔', '图木舒克', '五家渠', '北屯', '铁门关', '双河', '可克达拉'],
  '台湾': ['台北', '新北', '桃园', '台中', '台南', '高雄', '基隆', '新竹', '嘉义', '新竹县', '苗栗', '彰化', '南投', '云林', '嘉义县', '屏东', '宜兰', '花莲', '台东', '澎湖'],
  '香港': ['香港特别行政区'],
  '澳门': ['澳门特别行政区']
    },
    radioAlphabet: {
      'A': 'Alfa', 'B': 'Bravo', 'C': 'Charlie', 'D': 'Delta', 'E': 'Echo',
      'F': 'Foxtrot', 'G': 'Golf', 'H': 'Hotel', 'I': 'India', 'J': 'Juliett',
      'K': 'Kilo', 'L': 'Lima', 'M': 'Mike', 'N': 'November', 'O': 'Oscar',
      'P': 'Papa', 'Q': 'Quebec', 'R': 'Romeo', 'S': 'Sierra', 'T': 'Tango',
      'U': 'Uniform', 'V': 'Victor', 'W': 'Whiskey', 'X': 'X-ray', 'Y': 'Yankee',
      'Z': 'Zulu', '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four', '5': 'Five',
      '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Niner',
    },
    callSignExplanation: '',
  },
  computed: {
    availableCities: function () {
      return this.newLog.province ? this.cities[this.newLog.province] : [];
    },
    currentTime: function () {
      return new Date().toLocaleString('zh-CN', { hour12: false });
    },
    callSignCount: function () {
      return this.communicationLogs.filter(log => log.callSign === this.newLog.callSign).length;
    },
  },
  methods: {
    addLog: function () {
      const newRecord = { ...this.newLog };
      newRecord.time = this.currentTime;
      this.communicationLogs.push(newRecord);
      this.resetForm();
    },
    updateCallSign: function () {
      this.newLog.callSign = this.newLog.callSign.toUpperCase(); // 将呼号转换为大写形式
      this.getCallSignExplanation();
    },
    getCallSignExplanation: function () {
      this.callSignExplanation = this.newLog.callSign.split('').map(letter => {
        return this.radioAlphabet[letter.toUpperCase()] || '';
      }).join(' ');
    },
    exportLogs: function () {
      const csvData = [
    ['ID', '呼号', '通联时间', '模式', '频率', '收信号报告', '发信号报告', '发信设备', '发信天线', '发信功率', '通联类型', 'QTH省市'],
    ...this.communicationLogs.map((log, index) => [index + 1, log.callSign, log.time, log.mode, log.frequency, log.signalReportReceived, log.signalReportSent, log.equipment, log.antenna, log.power, log.communicationType, log.province + ' ' + log.city])
  ];

      const csvContent = csvData.map(row => row.join(',')).join('\n');

      // 创建 Blob 对象时指定编码格式为 GB2312
      const blob = new Blob(["\ufeff" + csvContent], { type: 'text/csv;charset=GB2312' });

      // 使用 FileSaver.js 保存文件
      saveAs(blob, 'communication_logs.csv');
    }
  }
});
