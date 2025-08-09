public class App {

    // 1. Función declarativa: consumo mensual en kWh
    public static int consumoMensual() {
        return 410;
    }

    // 2. Función declarativa: tarifa base por kWh
    public static int tarifaBase() {
        return 620;
    }

    // 3. Función "de expresión" (simulada en Java como método estático corto)
    public static int cargoFijo() {
        return 3500;
    }

    // 4. Función "de expresión": porcentaje IVA
    public static int porcentajeIVA() {
        return 19;
    }

    // 5. Función tipo "flecha" (en Java es un método corto)
    public static int calcularSubtotal() {
        return consumoMensual() * tarifaBase();
    }

    // 6. Función tipo "flecha": calcular IVA
    public static int calcularIVA() {
        return calcularSubtotal() * porcentajeIVA() / 100;
    }

    // 7. Función tipo "flecha": calcular total
    public static int calcularTotal() {
        return calcularSubtotal() + calcularIVA() + cargoFijo();
    }

    // 8. Función final que imprime resultados
    public static void mostrarFactura() {
        System.out.println("📄 FACTURA DE ENERGÍA");
        System.out.println("Consumo mensual: " + consumoMensual() + " kWh");
        System.out.println("Tarifa base: $" + tarifaBase() + " por kWh");
        System.out.println("Subtotal: $" + calcularSubtotal());
        System.out.println("IVA (" + porcentajeIVA() + "%): $" + calcularIVA());
        System.out.println("Cargo fijo: $" + cargoFijo());
        System.out.println("TOTAL A PAGAR: $" + calcularTotal());
    }

    public static void main(String[] args) {
        mostrarFactura();
    }
}

