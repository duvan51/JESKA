<<START:FILTER("RECIBOS", AND([fh_salida] >= TODAY(), [fh_salida] <= TODAY()))>>
   PLACA: <<[PLACA]>>
   TARIFA: <<[tarifa]>>
<<END:FILTER>>
