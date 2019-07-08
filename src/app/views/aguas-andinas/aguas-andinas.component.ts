import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';

interface ClientResponse {
  factura: string;
}


@Component({
  selector: 'app-aguas-andinas',
  templateUrl: './aguas-andinas.component.html',
  styleUrls: ['./aguas-andinas.component.scss']
})
export class AguasAndinasComponent implements OnInit {
  data: any;
  fileName = 'report.xlsx';
  complete = true;
  cantidadClientes: number = 0;
  progress: number = 0;
  total: number = 0;
  url = 'https://metric-marks-80160.herokuapp.com/api/factura/aguasandinas/';

  constructor(private http: HttpClient){ }

  ngOnInit() {
  }

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = (evt.target) as DataTransfer;
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = XLSX.utils.sheet_to_json(ws, {header: 1});
      for( let i = 1; i <this.data.length; i++){    
        this.data[i][2] = null;
        this.data[i][3] = null;
      }
      this.total = this.data.length;
    };
    reader.readAsBinaryString(target.files[0]);
  }

  consultaMasiva() {
    this.complete=false;
    this.consultar(this.data[1][1],1)
  }

  consultar(idClient: string, indice:number) {
    this.http.get<ClientResponse>(this.url + idClient).subscribe(
      (res) => {
        this.progress++;
        console.log(idClient+":"+indice);
        this.data[indice][2] = res.factura;
        indice++;        
        if(indice<this.data.length&&this.data[indice][1]){
          this.consultar(this.data[indice][1],indice)
        }        
        else {
          this.complete = true;
        }
        console.log(res.factura)   
      },
      (err) => {
        console.log(err);
      }
    );
  }


  export(): void {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

}
